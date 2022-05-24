import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandHommeComponent } from './command-homme.component';

describe('CommandHommeComponent', () => {
  let component: CommandHommeComponent;
  let fixture: ComponentFixture<CommandHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandHommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
