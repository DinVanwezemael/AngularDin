import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendToevoegenComponent } from './vriend-toevoegen.component';

describe('VriendToevoegenComponent', () => {
  let component: VriendToevoegenComponent;
  let fixture: ComponentFixture<VriendToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VriendToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
