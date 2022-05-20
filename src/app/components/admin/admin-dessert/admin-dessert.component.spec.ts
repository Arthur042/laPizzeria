import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDessertComponent } from './admin-dessert.component';

describe('AdminDessertComponent', () => {
  let component: AdminDessertComponent;
  let fixture: ComponentFixture<AdminDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
