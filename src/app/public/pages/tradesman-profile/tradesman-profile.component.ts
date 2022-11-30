import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tradesman-profile',
  templateUrl: './tradesman-profile.component.html',
  styleUrls: ['./tradesman-profile.component.scss'],
})

export class TradesmanProfileComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }
}
