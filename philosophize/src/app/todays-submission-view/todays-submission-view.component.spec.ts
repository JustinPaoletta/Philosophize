import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysSubmissionViewComponent } from './todays-submission-view.component';

describe('TodaysSubmissionViewComponent', () => {
  let component: TodaysSubmissionViewComponent;
  let fixture: ComponentFixture<TodaysSubmissionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodaysSubmissionViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodaysSubmissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
