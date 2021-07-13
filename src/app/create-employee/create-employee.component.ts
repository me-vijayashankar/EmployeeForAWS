import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Output() refreshEmpList : EventEmitter<boolean> = new EventEmitter();
  constructor(private fb: FormBuilder,private empService:EmployeeService) { }
  btnCreate= "Create/Update";
  ngOnInit(): void {
  }
  

  employeeForm = this.fb.group(
    {
      Emp_id :[''],
      Emp_Name :[''],
      Emp_Location :['']
    }
  );
  isDisabled = false;
  saveEmployee(){
    console.log(this.employeeForm.value);
    let emp : Employee = new Employee();
    emp.Emp_ID = this.employeeForm.get('Emp_id')?.value;
    emp.Emp_Name = this.employeeForm.get('Emp_Name')?.value;
    emp.Emp_Location = this.employeeForm.get('Emp_Location')?.value;
    this.empService.addEmployee(emp).subscribe(
      ()=>{
        console.log("trying to enable button back");
        alert("Saved Successfully ");
        this.isDisabled=false;
        this.employeeForm.reset();
        this.refreshEmpList.emit(true);
        this.btnCreate= "Create/Update";
      });
      this.isDisabled=true;
      this.btnCreate="Processing .."
  }

  resetEmployee(){
    // this.employeeForm.valid.
  }

}
