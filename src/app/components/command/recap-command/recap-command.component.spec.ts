import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCommandComponent } from './recap-command.component';

describe('RecapCommandComponent', () => {
  let component: RecapCommandComponent;
  let fixture: ComponentFixture<RecapCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
