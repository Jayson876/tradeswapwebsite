import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Parish } from 'src/app/public/models/parish';
import { ParishService } from 'src/app/public/service/parish.service';
import { UserService } from 'src/app/public/service/user.service';
@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent  {

  parishes!: Parish[];

  firstFormGroup = this._formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    phone_number: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    parishID: ['', Validators.required],
  });

  get first_name() {
    return this.firstFormGroup.get('first_name')?.value;
  }
  get last_name() {
    return this.firstFormGroup.get('last_name')?.value;
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
  get phone_number() {
    return this.firstFormGroup.get('phone_number')?.value;
  }
  get parishID() {
    return this.secondFormGroup.get('parishID')?.value;
  }

  getParishes(){
    this.parishService.getAllParish().subscribe((allParishes:any) =>{
      this.parishes = allParishes.data;
    })
  }

  ngOnInit(): void {
    this.getParishes();
  }

  isLinear = true;

  // dummy value for parish
  // pull from db
  // parishes =[
  //   {id:1,name:"Kingston"},
  //   {id:2,name:"Clarendon"},
  //   {id:3,name:"St. Catherine"},
  //   {id:4,name:"St. Mary"},
  //   {id:5,name:"St. Elisabeth"},
  //   {id:6,name:"Westmoreland"},
  // ]



  constructor(private _formBuilder: FormBuilder, private location: Location, private parishService: ParishService,
    private clientService: UserService) {}
   
  onSubmitForm(data: Object){
      this.clientService.addUser(data).subscribe({
      next:(res)=>{
        alert('Client Added')
      },
      error:(error)=>{
        console.log(error);        
      }
    })
  }

  back() {
    this.location.back();
  }
}
