import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-table-emp',
  templateUrl: './table-emp.component.html',
  styleUrls: ['./table-emp.component.css']
})
export class TableEmpComponent {  
  employees: Observable<Employee[]> | undefined;

  constructor(private employeeService: EmpServiceService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getList();
  }

  deleteEmp(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          this.reloadData();
          console.log(data); 
        },
        error => console.log(error));
  }

}
