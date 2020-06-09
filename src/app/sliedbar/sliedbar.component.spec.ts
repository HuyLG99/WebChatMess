import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliedbarComponent } from './sliedbar.component';

describe('SliedbarComponent', () => {
  let component: SliedbarComponent;
  let fixture: ComponentFixture<SliedbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliedbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
