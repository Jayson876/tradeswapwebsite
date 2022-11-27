import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTradesmanComponent } from './view-tradesman.component';

describe('ViewTradesmanComponent', () => {
  let component: ViewTradesmanComponent;
  let fixture: ComponentFixture<ViewTradesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTradesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTradesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
