import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-tradesman-registration',
  templateUrl: './tradesman-registration.component.html',
  styleUrls: ['./tradesman-registration.component.scss']
})
export class TradesmanRegistrationComponent {
// not requiring files for form completion for now
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    cellNumber: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    profilePhoto: ['', Validators.required],
    aboutMe: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    skill: ['', Validators.required],
    rate: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    parish: ['', Validators.required],
  });
  
  fifthFormGroup = this._formBuilder.group({
    idUpload: ['', Validators.required],
    selfieUpload: ['', Validators.required],
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
  // seperator
  get parish() {
    return this.secondFormGroup.get('parish')?.value;
  }
  
  // set this to false if you want to go through the stepper freely
  isLinear = true;
  
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
  // this would be the file....
  srcResult: any;
  // files are going to be hard to work with
  //  reference is here if you want to try
  // https://stackoverflow.com/questions/52622061/how-to-use-input-type-file-in-angular-material
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
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
