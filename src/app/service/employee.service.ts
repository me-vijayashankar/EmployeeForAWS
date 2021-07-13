import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private readonly Employee_URL = `${environment.API_URL}/employee`;

  public getAllEmployee(): Observable<Employee[]> | null {
    console.log(this.Employee_URL);    
    return this.http.get<Employee[]>(this.Employee_URL);    
  }

  public addEmployee(emp : Employee){
    console.log("in service",emp);
    return this.http.post(this.Employee_URL,emp);
  }

  public deleteEmployee(emp:Employee){
    console.log("in service",emp);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: emp,
    };
    return this.http.delete(this.Employee_URL,options);
  }


}
