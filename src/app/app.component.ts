import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { MessagesComponent} from './messages/messages.component';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { RouterOutlet } from '@angular/router'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, CommonModule, MessagesComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [
  //   HttpClientModule,
  // ]
})
export class AppComponent {
  title = 'HeroApp';

  constructor(){

  }
}