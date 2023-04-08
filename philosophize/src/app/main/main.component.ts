import { Component, inject, OnInit } from '@angular/core';

import { LocalStorageService } from '../utility/local.storage.service';

import { Quote } from '../quote/quote.model';
import { QuoteService } from '../quote/quote.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  quote: Quote;
  quotesLength: number;
  submitted: string;

  private quoteService: QuoteService = inject(QuoteService);
  private localStorageService: LocalStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    this.quotesLength = this.localStorageService.getQuotes().length;
    this.quote = this.quoteService.getRandomQuote();
    this.submitted = this.localStorageService.getSubmittedStatus();
  }

  quoteSubmitted(e: Event): void {
    this.localStorageService.setSubmitted();
    this.submitted = this.localStorageService.getSubmittedStatus();
    this.quotesLength = this.localStorageService.getQuotes().length;
  }
}
