import { Injectable } from "@angular/core";
import { HEROES } from './mock-hero';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import { MessageService } from "./messages.service";


@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('Hero Service: Fetched Hero');
        return of(HEROES);
    }
}