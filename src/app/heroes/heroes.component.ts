import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'
import { FormsModule } from '@angular/forms';
// import { HEROES } from '../mock-hero';
import { HeroesDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
// import { hero} from '../hero-detail/hero-detail.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [CommonModule, FormsModule, HeroesDetailComponent]
})
export class HeroesComponent implements OnInit{
    // hero : Hero = { id: 1, name: "Windstorm"};

    heroes!: Hero[];
    selectdHero!: Hero; //// Using definite assignment assertion


    constructor(private heroService:HeroService) { }

    ngOnInit() {
      this.getHero();
    }

    getHero(): void{
      //Calls the getHeroes method of HeroService, which returns an observable of Hero[].
      this.heroService.getHeroes().subscribe((objs) => this.heroes = objs);
      //Subscribes to the observable, providing a callback function that is executed when data is received.
//The received data (objs) is assigned to the heroes property.
    }

    onSelectHero(hero: Hero) {
      this.selectdHero = hero;
      console.log(this.selectdHero);
    }
}
