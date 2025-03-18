import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';
import { FormComponent} from './form/form.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[];
  employeeId: number;
  error: boolean;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.error = false;
  }

  searchByEmployeeId(employeeId: number): void {
    this.employeeId = employeeId;
    this.employeeList = [];
    this.employeeService.findAll(this.employeeId).subscribe(response => {
      if (response.status === 'success') {
        response.data.forEach(employee => {
          const employeeTable = new Employee();
          employeeTable.id = employee.id;
          employeeTable.employeeName = employee.employeeName;
          employeeTable.employeeSalary = employee.employeeSalary;
          employeeTable.employeeSalaryAnnual = employee.employeeAnnualSalary;
          employeeTable.employeeAge = employee.employeeAge;
          employeeTable.profileImage = employee.profileImage;
          this.employeeList.push(employeeTable);
        });
      } else {
        this.error = true;
      }
    });
  }

}
