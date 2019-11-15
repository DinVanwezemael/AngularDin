import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitgenodigdePollsComponent } from './uitgenodigde-polls.component';

describe('UitgenodigdePollsComponent', () => {
  let component: UitgenodigdePollsComponent;
  let fixture: ComponentFixture<UitgenodigdePollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitgenodigdePollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitgenodigdePollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
