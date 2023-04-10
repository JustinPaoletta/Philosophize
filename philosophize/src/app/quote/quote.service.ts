import { inject, Injectable } from '@angular/core';

import { LocalStorageService } from '../storage/local.storage.service';
import { quotes } from './quotes';
import { Quote } from './quote.model';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private localStorageService: LocalStorageService = inject(LocalStorageService);

  quotes: Quote[];

  constructor() {
    this.configureQuotes();
    this.configureDate();
  }

  configureQuotes(): void {
    if (!this.localStorageService.quotesExist()) {
      this.localStorageService.storeQuotes(quotes);
    }

    this.quotes = this.localStorageService.getQuotes();
  }

  configureDate(): void {
    if (this.localStorageService.isNewDay()) {
      this.localStorageService.setTodaysInfo(Math.floor(Math.random() * this.localStorageService.getQuotes().length).toString());
      this.localStorageService.removeSubmittedStatus();
    }
  }

  getRandomQuote(): Quote {
    return this.quotes[Number(this.localStorageService.getTodaysIndex())];
  }

  deleteQuote(text: string): void {
    const filteredQuotes = this.localStorageService.getQuotes().filter((quote: Quote) =>
      quote.text !== text
    );

    this.localStorageService.storeQuotes(filteredQuotes);
  }
}
