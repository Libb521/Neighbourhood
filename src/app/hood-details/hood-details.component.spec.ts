import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodDetailsComponent } from './hood-details.component';

describe('HoodDetailsComponent', () => {
  let component: HoodDetailsComponent;
  let fixture: ComponentFixture<HoodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
