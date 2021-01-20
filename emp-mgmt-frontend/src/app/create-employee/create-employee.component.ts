import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import {EmployeeRequest} from '../employeeRequest';
import {Observable} from 'rxjs';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  employeeRequest: EmployeeRequest = new EmployeeRequest();
  submitted = false;
  person: Person = new Person();
  persons: Observable<Person[]>;

  constructor(private employeeService: EmployeeService,
              private personService: PersonService,
              private router: Router) { }

  ngOnInit() {
    this.personService.getPersonList()
      .subscribe(data => {
        console.log('31 Data ' + data);
        this.persons = data;
      }, error => console.log(error));
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
    this.person = new Person();

  }

  save() {
    // const strPerson = this.employee.strPerson;
    // console.log('strPerson = ' + strPerson);

    // console.log('Posting... ' + this.person);
    // this.person = new Person();
    // this.person.personId = strPerson;
    // console.log('this.Person.name =  ' + this.person.name);
    // this.Persons = new Array(this.Person);
    // console.log('this.Persons =  ' + this.Persons);
    // this.employee.person = this.person;
    // this.book.Persons.push(this.Person);


    console.log('employeeRequest... ' + this.employeeRequest);
    // this.employee.employeeNum = this.employeeRequest.employeeNum;
    // this.employee.employedDate = this.employeeRequest.employedDate;
    // this.employee.terminatedDate = this.employeeRequest.terminatedDate;
    // this.employee.person.personId = this.employeeRequest.personId;
    // console.log('employee... ' + this.employee);


    this.employeeService.createEmployee(this.employeeRequest)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
