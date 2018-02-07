import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovelyDayComponent } from './lovely-day.component';

describe('LovelyDayComponent', () => {
  let component: LovelyDayComponent;
  let fixture: ComponentFixture<LovelyDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovelyDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovelyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
