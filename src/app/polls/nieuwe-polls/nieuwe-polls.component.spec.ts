import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwePollsComponent } from './nieuwe-polls.component';

describe('NieuwePollsComponent', () => {
  let component: NieuwePollsComponent;
  let fixture: ComponentFixture<NieuwePollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwePollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwePollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
