package com.example.demo.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.E_Services.Employee_Services;
import com.example.demo.Entity.Employee;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class Employee_controller {
	
	@Autowired
	Employee_Services emp_service;
	
	@RequestMapping(value="/")
	public String foo() {
		return "Homepage Response!";
	}
	
	@PostMapping(value="/add")
	public Employee add(@RequestBody Employee emp) {
		return emp_service.add(emp);
	}
	
	@GetMapping(value="/table")
	public List<Employee> getAll(){
		return emp_service.getAll();
	}
	
	@DeleteMapping(value="/table/{emp_id}")
	public String delete(@PathVariable Long emp_id) {
		return emp_service.delete(emp_id);
	}
	
	
}
