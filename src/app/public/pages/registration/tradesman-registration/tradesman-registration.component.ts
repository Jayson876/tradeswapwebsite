import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { UserService } from 'src/app/public/service/user.service';
import { User } from 'src/app/public/models/user';
import { Parish } from 'src/app/public/models/parish';
import { Skills } from 'src/app/public/models/skills';
import { ParishService } from 'src/app/public/service/parish.service';
import { SkillsService } from 'src/app/public/service/skills.service';

@Component({
  selector: 'app-tradesman-registration',
  templateUrl: './tradesman-registration.component.html',
  styleUrls: ['./tradesman-registration.component.scss']
})
export class TradesmanRegistrationComponent {
// not requiring files for form completion for now
  parishes!: Parish[];
  skills!: Skills[];
  firstFormGroup = this._formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    phone_number: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    profilePhoto: ['', Validators.required],
    aboutMe: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    categoryID: ['', Validators.required],
    work_rate: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    parishID: ['', Validators.required],
  });

  fifthFormGroup = this._formBuilder.group({
    idUpload: ['', Validators.required],
    selfieUpload: ['', Validators.required],
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
  // seperator
  get parishID() {
    return this.secondFormGroup.get('parishID')?.value;
  }
  get work_rate() {
    return this.thirdFormGroup.get('work_rate')?.value;
  }

  getParishes(){
    this.parishService.getAllParish().subscribe((allParishes:any) =>{
      this.parishes = allParishes.data;
    })
  }

  getSkills(){
    this.skillService.getAllSkills().subscribe((allSkills:any) =>{
      this.skills = allSkills.data;
    })
  }
  // set this to false if you want to go through the stepper freely
  isLinear = true;

  // dummy value for parishID and categoryID
  // pull from db
  // parishes =[
  //   {id:1,name:"Kingston"},
  //   {id:2,name:"Clarendon"},
  //   {id:3,name:"St. Catherine"},
  //   {id:4,name:"St. Mary"},
  //   {id:5,name:"St. Elisabeth"},
  //   {id:6,name:"Westmoreland"},
  // ]
  // skills =[
  //   {id:1,name:"Plumming"},
  //   {id:2,name:"Masonry"},
  //   {id:3,name:"Electrical"},
  // ]
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

  constructor(private _formBuilder: FormBuilder, private location: Location, 
    private parishService: ParishService, private skillService: SkillsService,private tradesmanService:UserService) {}

  ngOnInit(): void {
    this.getParishes();
    this.getSkills();
  }

// you can use this function when they complete the form
  onSubmitForm(data: Object){
    // too lazy to do confirm password logic
    // I am also too lazy to implement this feature
    // all user data collected
    // const formData ={
    //   first_name:this.first_name,
    //   last_name:this.last_name,
    //   email:this.email,
    //   username:this.email,
    //   password:this.password,
    //   phone_number:this.phone_number,
    //   parishIDID:'63556f9ddf6e9c413ef6bf5d',
    //   categoryID:'63557069df6e9c413ef6bf79',
    //   roleID:'636e862044bed1477f01219e',
    //   work_work_rate: this.work_rate,
    // }
    this.tradesmanService.addUser(data).subscribe({
      next:(res)=>{
        alert('Tradesman Added')
      },
      error:(error)=>{
        console.log(error);        
      }
    })
    // TODO. implement logic to post this to backend
    // TODO. navigate user when post is completed
  }

  

  back() {
    this.location.back();
  }
}
