import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee[employee]',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee : Employee|null =null;
  @Output() refreshEmpList : EventEmitter<boolean> = new EventEmitter();
  constructor(private empService:EmployeeService) { }
  isDeleteDisabled = false;
  deleteButtonValue = "Delete";

  ngOnInit(): void {
  }

  deleteEmployee(){
    if(this.employee!=null){
      console.log(this.employee);
      this.empService.deleteEmployee(this.employee).subscribe(()=>{
        console.log("deleted");
        this.refreshEmpList.emit(true);
        this.isDeleteDisabled=true;
      });
      this.deleteButtonValue="Deleting .."
    }
  }

}
