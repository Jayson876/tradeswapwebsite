import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent  {
  
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    cellNumber: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    parish: ['', Validators.required],
  });

  get firstName() {
    return this.firstFormGroup.get('firstName')?.value;
  }
  get lastName() {
    return this.firstFormGroup.get('lastName')?.value;
  }
  get email() {
    return this.firstFormGroup.get('email')?.value;
  }
  get password() {
    return this.firstFormGroup.get('password')?.value;
  }
  get confirmPassword() {
    return this.firstFormGroup.get('confirmPassword')?.value;
  }
  get cellNumber() {
    return this.firstFormGroup.get('cellNumber')?.value;
  }
  get parish() {
    return this.secondFormGroup.get('parish')?.value;
  }


  isLinear = true;

  // dummy value for parish
  // pull from db
  parishes =[
    {id:1,name:"Kingston"},
    {id:2,name:"Clarendon"},
    {id:3,name:"St. Catherine"},
    {id:4,name:"St. Mary"},
    {id:5,name:"St. Elisabeth"},
    {id:6,name:"Westmoreland"},
  ]



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
