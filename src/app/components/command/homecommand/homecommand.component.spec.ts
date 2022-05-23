import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecommandComponent } from './homecommand.component';

describe('HomecommandComponent', () => {
  let component: HomecommandComponent;
  let fixture: ComponentFixture<HomecommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
