package com.example.demo.E_Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Employee;
import com.example.demo.Repository.Repository;

@Service
public class service_imple implements Employee_Services{
	@Autowired
	Repository emp_rep;

	@Override
	public Employee add(Employee emp) {
		return emp_rep.save(emp);
	}

	@Override
	public List<Employee> getAll() {
		List<Employee> all = new ArrayList<>();
		all = emp_rep.findAll();
		return all;
	}

	@Override
	public String delete(Long emp_id) {
		emp_rep.deleteById(emp_id);
		return "Employee deleted successfully!";
	}


}
