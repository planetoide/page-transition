import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSliderPageComponent } from './status-slider-page.component';

describe('StatusSliderPageComponent', () => {
  let component: StatusSliderPageComponent;
  let fixture: ComponentFixture<StatusSliderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusSliderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSliderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
