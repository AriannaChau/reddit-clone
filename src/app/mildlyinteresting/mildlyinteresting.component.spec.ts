import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MildlyinterestingComponent } from './mildlyinteresting.component';

describe('MildlyinterestingComponent', () => {
  let component: MildlyinterestingComponent;
  let fixture: ComponentFixture<MildlyinterestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MildlyinterestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MildlyinterestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
