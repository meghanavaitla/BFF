import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenaccessoriesComponent } from './womenaccessories.component';

describe('WomenaccessoriesComponent', () => {
  let component: WomenaccessoriesComponent;
  let fixture: ComponentFixture<WomenaccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenaccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
