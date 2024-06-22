import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { MessageService } from './messages.service';
// import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
    declarations: [
        // AppComponent,
        // HeroesComponent // Declare the HeroesComponent
      ],
    imports: [
    AppComponent,
    // HeroesComponent,
    HttpClientModule,
    BrowserModule,
    
    // FormsModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    // FormsModule
    // HeroesModuleModule
    // MatFormFieldModule,
    // MatInputModule
    
    ],
    // providers: [
    //   MessageService],
    bootstrap: [  ],
    
})
export class AppModule { }

