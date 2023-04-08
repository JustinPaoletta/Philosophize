import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedJournalViewComponent } from './completed-journal-view.component';

describe('CompletedJournalViewComponent', () => {
  let component: CompletedJournalViewComponent;
  let fixture: ComponentFixture<CompletedJournalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedJournalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedJournalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
