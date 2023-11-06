import { Input, Component} from '@angular/core';
      
@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./app.component.css']
})
export class ChildComponent{ 
    @Input() studentName: string[];
	@Input() studentGrade: number[];

	calculateAverageGrade() {
		if (this.studentGrade.length > 0) {
            let sum = 0;

			for (const grade of this.studentGrade) {
				sum += grade;
			}

            return sum / this.studentGrade.length;
        } 
		else {
            return 0;
        }
	}
}
