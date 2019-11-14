import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BewerkPollComponent } from './bewerk-poll.component';

describe('BewerkPollComponent', () => {
  let component: BewerkPollComponent;
  let fixture: ComponentFixture<BewerkPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BewerkPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BewerkPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
