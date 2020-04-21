import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenaccessoriesComponent } from './menaccessories.component';

describe('MenaccessoriesComponent', () => {
  let component: MenaccessoriesComponent;
  let fixture: ComponentFixture<MenaccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenaccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
