import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent{
 id : number | undefined =undefined;
 name : string | undefined = undefined;
 dob : Date | undefined = undefined;

 constructor(private _service : EmployeeService){}
   save(formValues : any){
     this._service.store(formValues);
   
 }
}
