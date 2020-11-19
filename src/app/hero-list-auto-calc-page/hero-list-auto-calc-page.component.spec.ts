import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListAutoCalcPageComponent } from './hero-list-auto-calc-page.component';

describe('HeroListAutoCalcPageComponent', () => {
  let component: HeroListAutoCalcPageComponent;
  let fixture: ComponentFixture<HeroListAutoCalcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListAutoCalcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListAutoCalcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
