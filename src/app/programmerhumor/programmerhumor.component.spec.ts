import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerhumorComponent } from './programmerhumor.component';

describe('ProgrammerhumorComponent', () => {
  let component: ProgrammerhumorComponent;
  let fixture: ComponentFixture<ProgrammerhumorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammerhumorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerhumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
