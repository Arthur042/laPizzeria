import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPizzaComponent } from './command-pizza.component';

describe('CommandPizzaComponent', () => {
  let component: CommandPizzaComponent;
  let fixture: ComponentFixture<CommandPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
