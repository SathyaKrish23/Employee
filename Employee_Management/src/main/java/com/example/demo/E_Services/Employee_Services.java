package com.example.demo.E_Services;
import java.util.List;

import com.example.demo.Entity.Employee;



public interface Employee_Services {
	
	public Employee add(Employee emp);

	public List<Employee> getAll();

	public String delete(Long emp_id);

}
