import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilipTestComponent } from './filip-test.component';

describe('FilipTestComponent', () => {
  let component: FilipTestComponent;
  let fixture: ComponentFixture<FilipTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilipTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
