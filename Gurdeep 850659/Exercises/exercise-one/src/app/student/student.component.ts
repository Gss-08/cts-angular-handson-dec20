import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
  student1 : Student = new Student(1, "Shiny", 90);
  student2 : Student = new Student(2, "Tom", 30);
  student3 : Student = new Student(3, "Jerry", 50);
  
}
