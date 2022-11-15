import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesmanRegistrationComponent } from './tradesman-registration.component';

describe('TradesmanRegistrationComponent', () => {
  let component: TradesmanRegistrationComponent;
  let fixture: ComponentFixture<TradesmanRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradesmanRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesmanRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
