import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError, timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string;

  constructor(private http: HttpClient) { }

  findAll(employeeId: number): Observable<any> {
    this.url = 'http://localhost:8080/employee/getList';
    if (employeeId != null) {
      this.url = this.url + '/' + employeeId;
    }
    return this.http
      .get(this.url)
      .pipe(timeout(300000), catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error);
  }
}
