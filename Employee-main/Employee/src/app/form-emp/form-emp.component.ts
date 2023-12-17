import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-emp',
  templateUrl: './form-emp.component.html',
  styleUrls: ['./form-emp.component.css']
})
export class FormEmpComponent {
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmpServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoHome();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;   
  }
  gotoHome() {
    this.router.navigate(['/home']);
  }
}
