import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradesmanComponent } from './add-tradesman.component';

describe('AddTradesmanComponent', () => {
  let component: AddTradesmanComponent;
  let fixture: ComponentFixture<AddTradesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTradesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTradesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
