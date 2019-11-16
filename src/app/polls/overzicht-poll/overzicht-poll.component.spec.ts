import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtPollComponent } from './overzicht-poll.component';

describe('OverzichtPollComponent', () => {
  let component: OverzichtPollComponent;
  let fixture: ComponentFixture<OverzichtPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
