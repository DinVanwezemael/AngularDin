import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendVerzoekComponent } from './vriend-verzoek.component';

describe('VriendVerzoekComponent', () => {
  let component: VriendVerzoekComponent;
  let fixture: ComponentFixture<VriendVerzoekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VriendVerzoekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendVerzoekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
