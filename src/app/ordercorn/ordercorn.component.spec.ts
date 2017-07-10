import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercornComponent } from './ordercorn.component';

describe('OrdercornComponent', () => {
  let component: OrdercornComponent;
  let fixture: ComponentFixture<OrdercornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
