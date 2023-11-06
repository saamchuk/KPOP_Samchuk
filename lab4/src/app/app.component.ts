import { Component } from '@angular/core';
      
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    name: string = '';
    names: string[] = [];
    grade: number = 0;
    grades: number[] = [];

    addStudent() {
        if(this.name.trim() != ''){
            this.names.push(this.name);
            this.name = ' ';
            this.grades.push(this.grade);
            this.grade = 0;
        }
    }
}