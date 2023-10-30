import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<h3>Введіть ім’я:</h3>
                    <input [(ngModel)]="name" placeholder="name"><br><br>
                    <button (click)="addName()">Додати ім'я</button>
                    <h2>Список імен:</h2>
                    <ul>
                        <li *ngFor="let name of names">{{ name }}</li>
                    </ul>`
})
export class AppComponent { 
    name: string = '';
    names: string[] = [];

    addName() {
        if(this.name.trim() != ''){
            this.names.push(this.name);
            this.name = ' ';
        }
    }
}