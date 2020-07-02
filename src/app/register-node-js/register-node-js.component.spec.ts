import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNodeJSComponent } from './register-node-js.component';

describe('RegisterNodeJSComponent', () => {
  let component: RegisterNodeJSComponent;
  let fixture: ComponentFixture<RegisterNodeJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNodeJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNodeJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
