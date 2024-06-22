import { OnInit, Component } from "@angular/core";
import { MessageService } from "../messages.service";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { MessagsComponent } from "./messages.component";

@Component({
    selector: 'app-message',
    standalone: true,
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css',
    imports: [CommonModule, FormsModule],
})


export class MessagesComponent implements OnInit{

    constructor(public messageService: MessageService){

    }

    ngOnInit(): void {
    }

}