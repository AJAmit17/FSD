import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Student {
    studentName: string;
    usn: string;
}

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [FormsModule, CommonModule]
})

export class AppComponent {
    studentModel: Student = {
        studentName: '',
        usn: ''
    };

    onSubmit(): void {
        console.log('Form Submitted Data:', this.studentModel);
        alert(`Registration successful for: ${this.studentModel.studentName}`);
        this.studentModel = { studentName: '', usn: '' };
    }
}
