import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-tradesman',
  templateUrl: './add-tradesman.component.html',
  styleUrls: ['./add-tradesman.component.scss']
})
export class AddTradesmanComponent {
  form = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cPassword: ['', Validators.required],
    cellNumber: ['', Validators.required],
    skill: ['', Validators.required],
    parish: ['', Validators.required],
  });

  get firstName() {
    return this.form.get('firstName')?.value;
  }
  get lastName() {
    return this.form.get('lastName')?.value;
  }
  get email() {
    return this.form.get('email')?.value;
  }
  get password() {
    return this.form.get('password')?.value;
  }
  get confirmPassword() {
    return this.form.get('cPassword')?.value;
  }
  get cellNumber() {
    return this.form.get('cellNumber')?.value;
  }
  // seperator
  get parish() {
    return this.form.get('parish')?.value;
  }

  // dummy value for parish and skill
  // pull from db
  parishes =[
    {id:1,name:"Kingston"},
    {id:2,name:"Clarendon"},
    {id:3,name:"St. Catherine"},
    {id:4,name:"St. Mary"},
    {id:5,name:"St. Elisabeth"},
    {id:6,name:"Westmoreland"},
  ]
  skills =[
    {id:1,name:"Plumming"},
    {id:2,name:"Masonry"},
    {id:3,name:"Electrical"},
  ]

  onSubmit(): void {

  }

  constructor(private _formBuilder: FormBuilder) {}
// you can use this function when they complete the form
  onSubmitForm(){
    // too lazy to do confirm password logic

    // all user data collected
    const formData ={
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      cellNumber:this.cellNumber,
      parishId:this.parish
    }
    // TODO. implement logic to post this to backend
    // TODO. navigate user when post is completed
  }

}
