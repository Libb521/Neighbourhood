import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessFormComponent } from './bussiness-form.component';

describe('BussinessFormComponent', () => {
  let component: BussinessFormComponent;
  let fixture: ComponentFixture<BussinessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
