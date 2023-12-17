import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http:HttpClient){ }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'add', employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`+'table'+`/${id}`, { responseType: 'text' });
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'table');
  }
 
 
}
