import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandBoissonComponent } from './command-boisson.component';

describe('CommandBoissonComponent', () => {
  let component: CommandBoissonComponent;
  let fixture: ComponentFixture<CommandBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandBoissonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
