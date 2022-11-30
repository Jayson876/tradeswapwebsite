import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tradesman',
  templateUrl: './add-tradesman.component.html',
  styleUrls: ['./add-tradesman.component.scss']
})
export class AddTradesmanComponent implements OnInit {

  constructor() { }
onSubmit(){
console.log('Great')
}
parishes: any[] = [
{name: 'David'},
];
skills: any[] = [
{name: 'David'},
];
  ngOnInit(): void {
  }

}
