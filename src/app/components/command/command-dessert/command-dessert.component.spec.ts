import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDessertComponent } from './command-dessert.component';

describe('CommandDessertComponent', () => {
  let component: CommandDessertComponent;
  let fixture: ComponentFixture<CommandDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
