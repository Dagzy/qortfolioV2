import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMachineComponent } from './plant-machine.component';

describe('PlantMachineComponent', () => {
  let component: PlantMachineComponent;
  let fixture: ComponentFixture<PlantMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
