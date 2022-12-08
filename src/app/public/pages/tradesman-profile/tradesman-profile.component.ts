import { EditProfileService } from './../../service/edit-profile.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-tradesman-profile',
  templateUrl: './tradesman-profile.component.html',
  styleUrls: ['./tradesman-profile.component.scss'],
})

export class TradesmanProfileComponent implements OnInit {

  selectedId : string  = this.activateRoute.snapshot.params['id'];
  tradesman!:User[];
  selectedTradesman:any[] = [];

  constructor(private location: Location, private activateRoute:ActivatedRoute, private tradesmanService:UserService, private editProfileService: EditProfileService) {}

  getTradesmanById(){
    this.tradesmanService.getUserByID(this.selectedId).subscribe((worker:any) => {
      this.tradesman = worker.data;
      this.selectedTradesman.push(worker.data);
      console.log(this.selectedTradesman);
    })
  }

  ngOnInit(): void {
    this.getTradesmanById();
  }

  back() {
    this.location.back();
  }

  onUpdate() {
    this.editProfileService
      .openConfirmDialog(this.selectedId)
      .afterClosed()
      .subscribe((data: any) => {
        if (data) {
          // console.log(data);
        }
      });
  }
}
