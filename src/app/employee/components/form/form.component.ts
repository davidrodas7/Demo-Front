import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  idEmployee: number;

  constructor(
    private employeeService: EmployeeService
  ) { }

  @Output() searchEmployeeEvent = new EventEmitter();

  ngOnInit(): void {

  }

  search(): void {
    this.searchEmployeeEvent.emit(this.idEmployee);
  }

}
