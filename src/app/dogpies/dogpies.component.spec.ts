import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogpiesComponent } from './dogpies.component';

describe('DogpiesComponent', () => {
  let component: DogpiesComponent;
  let fixture: ComponentFixture<DogpiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogpiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
