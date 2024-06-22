import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'
import { FormsModule } from '@angular/forms';
// import { HEROES } from '../mock-hero';

@Component({
    selector: 'app-hero-detail',
    standalone: true,
    templateUrl: './hero-detail.component.html',
    styleUrl: './hero-detail.component.css',
    imports: [CommonModule, FormsModule],
})
export class HeroesDetailComponent implements OnInit{
    // hero : Hero = { id: 1, name: "Windstorm"};

    // heroes = HEROES;
    @Input('hero') heroDetail!: Hero; //// Using definite assignment assertion


    constructor() { }

    ngOnInit() {
    }
}
