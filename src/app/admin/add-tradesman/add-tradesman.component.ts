import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from 'src/app/public/service/user.service';
import { ParishService } from 'src/app/public/service/parish.service';
import { SkillsService } from 'src/app/public/service/skills.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-tradesman',
  templateUrl: './add-tradesman.component.html',
  styleUrls: ['./add-tradesman.component.scss']
})
export class AddTradesmanComponent implements OnInit {
  submitted = false;
  TradesmanForm!: FormGroup;
  parishes: any;
  skills: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService,
    private parishService: ParishService,
    private skillService: SkillsService ) {
      this.mainForm();
    }

  mainForm() {
    this.TradesmanForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),]],
      skill: ['', [Validators.required]],
      parish: ['', [Validators.required]],
    });
  }

  // updateProfile(e: any) {
  //   this.TradesmanForm.get('skill').setValue(e, {
  //     onlySelf: true,
  //   });
  // }

  get myForm() {
    return this.TradesmanForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.TradesmanForm.valid) {
      return false;
    } else {
      return this.userService.addUser(this.TradesmanForm.value).subscribe({
        complete: ()=> {
          console.log("Employee has been created successfully"),
          this.ngZone.run(()=> this.router.navigateByUrl('/admin/home'));
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }

  ngOnInit(): void {
    this.getSkills();
    this.getParishes();
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

}
