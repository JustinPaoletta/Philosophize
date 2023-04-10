import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LocalStorageService } from '../storage/local.storage.service';
import { Observable } from 'rxjs';
import { JournalEntryGroup, JournalEntry } from './journal.model';
import { Quote } from '../quote/quote.model';
import { QuoteService } from '../quote/quote.service';
import { JournalServiceBase } from './base.journal.service';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input() quote: Quote;
  @Output() newEntrySubmitted = new EventEmitter();

  form!: FormGroup;

  characters: Observable<string>;

  private quoteService: QuoteService = inject(QuoteService);
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  private journalService: JournalServiceBase = inject(JournalServiceBase);

  ngOnInit(): void {
    this.form = new FormGroup<JournalEntryGroup>({
      date: new FormControl<Date>({ value: new Date(), disabled: true }),
      quote: new FormControl<Quote>(this.quote),
      entry: new FormControl<string>('', [Validators.required, Validators.minLength(80), Validators.maxLength(5300)])
    });

    this.characters = this.form.get('entry').valueChanges;
  }

  onSubmit(): void {
    const formValue: JournalEntry = this.form.getRawValue();
    this.localStorageService.submitEntry(formValue.date.toLocaleDateString(), JSON.stringify(this.form.value));
    this.quoteService.deleteQuote(formValue.quote.text);
    this.newEntrySubmitted.emit();
    this.journalService.downloadEntry(formValue);
  }
}
