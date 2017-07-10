import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosleepComponent } from './nosleep.component';

describe('NosleepComponent', () => {
  let component: NosleepComponent;
  let fixture: ComponentFixture<NosleepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosleepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
