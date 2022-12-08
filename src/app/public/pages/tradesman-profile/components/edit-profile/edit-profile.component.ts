import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Parish } from 'src/app/public/models/parish';
import { Skills } from 'src/app/public/models/skills';
import { ParishService } from 'src/app/public/service/parish.service';
import { SkillsService } from 'src/app/public/service/skills.service';
import { UserService } from 'src/app/public/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  skills!: Skills[];
  isSubmitted!: boolean;
  selectedId: string = this.data.id;
  updateUserForm!: FormGroup;
  currentUser!: any;
  parishes!: Parish[];

  getParishes() {
    this.parishService.getAllParish().subscribe((allParishes: any) => {
      this.parishes = allParishes.data;
      console.log(this.parishes);
    });
  }

  getSkills() {
    this.skillService.getAllSkills().subscribe((allSkills: any) => {
      this.skills = allSkills.data;
    });
  }
  constructor(
    private activateRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    private fb: FormBuilder,
    private userService: UserService,
    private skillService: SkillsService,
    private parishService: ParishService
  ) {}


  ngOnInit(): void {
    this.getParishes();
    this.getSkills();
    this.getUserById();

    this.updateUserForm = this.fb.group({
      first_name: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      last_name: new FormControl('', Validators.compose([Validators.required])),

      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      aboutMe: [''],
      categoryID: ['', Validators.required],
      work_rate: ['', Validators.required],
      parishID: ['', Validators.required],
    });

    this.getUserById();
  }

  updateUser() {
    const formData = new FormData();
    if (this.updateUserForm.valid) {
      formData.append(
        'first_name',
        this.updateUserForm.controls['first_name'].value
      );
      formData.append(
        'last_name',
        this.updateUserForm.controls['last_name'].value
      );
      formData.append('email', this.updateUserForm.controls['email'].value);
      formData.append(
        'phone_number',
        this.updateUserForm.controls['phone_number'].value
      );
      formData.append('aboutMe', this.updateUserForm.controls['aboutMe'].value);
      formData.append(
        'categoryID',
        this.updateUserForm.controls['categoryID'].value
      );
      formData.append(
        'worker_rate',
        this.updateUserForm.controls['worker_rate'].value
      );
      formData.append(
        'parishID',
        this.updateUserForm.controls['parishID'].value
      );

      this.userService.updateUser(this.selectedId, formData).subscribe(() => {
        this.reloadPage();
      });
    }
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  getUserById() {
    console.log(this.data.id);
    this.userService.getUserByID(this.selectedId).subscribe((result) => {
      this.currentUser = result;
      console.log(this.currentUser);
      this.updateUserForm.patchValue({
        first_name: result.data.first_name,
        last_name: result.data.last_name,
        email: result.data.email,
        phone_number: result.data.phone_number,
        aboutMe: result.data.aboutMe,
        categoryID: result.data.categoryID,
        work_rate: result.data.work_rate,
        parishID: result.data.parishID,
      });
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
