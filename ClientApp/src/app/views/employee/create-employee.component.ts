import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private emp: FormBuilder) { }
  // From group use
  // ngOnInit() {
  //   this.employeeForm= new FormGroup({
  //     fullName:new FormControl(),
  //     email: new FormControl(),
  //     employeeSkills:new FormGroup({
  //       skillName: new FormControl(),
  //       skillExperience:new FormControl()
  //     })
  //   })
  // }
  ngOnInit() {
    this.employeeForm = this.emp.group({
      fullName: [''],
      email: [''],
      // employeeSkills: this.emp.group({
      //   skillName: [''],
      //   skillExperience: ['']
      // })
    })
  }
  onSubmit(): void {
    console.log(this.employeeForm.value)
  }
}

