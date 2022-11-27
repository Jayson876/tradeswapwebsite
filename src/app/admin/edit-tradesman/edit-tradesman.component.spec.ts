import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTradesmanComponent } from './edit-tradesman.component';

describe('EditTradesmanComponent', () => {
  let component: EditTradesmanComponent;
  let fixture: ComponentFixture<EditTradesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTradesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTradesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
