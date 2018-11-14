import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSafesComponent } from './user-safes.component';

describe('UserHomeComponent', () => {
  let component: UserSafesComponent;
  let fixture: ComponentFixture<UserSafesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserSafesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
