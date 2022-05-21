import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDessertComponent } from './update-dessert.component';

describe('UpdateDessertComponent', () => {
  let component: UpdateDessertComponent;
  let fixture: ComponentFixture<UpdateDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
