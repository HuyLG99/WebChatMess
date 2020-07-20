import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnickComponent } from './addnick.component';

describe('AddnickComponent', () => {
  let component: AddnickComponent;
  let fixture: ComponentFixture<AddnickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
