import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalwearComponent } from './traditionalwear.component';

describe('TraditionalwearComponent', () => {
  let component: TraditionalwearComponent;
  let fixture: ComponentFixture<TraditionalwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
