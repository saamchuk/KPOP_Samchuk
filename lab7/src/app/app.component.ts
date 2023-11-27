import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
  printForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.printForm = this.fb.group({
      paperType: ['', Validators.required],
      productType: ['', Validators.required],
      format: ['', Validators.required],
      inkType: ['', Validators.required],
      numberOfSheets: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      numberOfCopies: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      numberOfSides: ['', Validators.required],
      numberOfMaster: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit() {
    console.log(this.printForm.value);
    // Додайте логіку для відправлення даних
  }
}
