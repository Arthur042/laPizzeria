import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDessertComponent } from './card-dessert.component';

describe('CardDessertComponent', () => {
  let component: CardDessertComponent;
  let fixture: ComponentFixture<CardDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
