import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  emplist: Employee[] = []
  lodigScreenDisp = "Loading ...";
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getData();
  };

  getData() {
    this.empService.getAllEmployee()?.subscribe(
      data => {
        this.emplist = data;
      },
      err => console.log(err),
      () => {
        console.log(this.emplist);
        this.lodigScreenDisp="No Employees"
      }
    );
    this.lodigScreenDisp = "Loading ...";
  }

}
