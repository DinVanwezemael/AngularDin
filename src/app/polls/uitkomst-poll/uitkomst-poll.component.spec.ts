import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitkomstPollComponent } from './uitkomst-poll.component';

describe('UitkomstPollComponent', () => {
  let component: UitkomstPollComponent;
  let fixture: ComponentFixture<UitkomstPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitkomstPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitkomstPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
