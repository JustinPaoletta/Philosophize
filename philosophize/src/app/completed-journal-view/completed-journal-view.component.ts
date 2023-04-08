import { Component, inject } from '@angular/core';
import { JournalServiceBase } from '../journal/base.journal.service';

@Component({
  selector: 'app-completed-journal-view',
  templateUrl: './completed-journal-view.component.html',
  styleUrls: ['./completed-journal-view.component.scss']
})
export class CompletedJournalViewComponent {
  private journalService: JournalServiceBase = inject(JournalServiceBase);

  downloadFullJournal(): void {
    this.journalService.downloadFullJournal();
  }
}
