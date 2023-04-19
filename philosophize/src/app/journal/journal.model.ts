import { FormControl } from "@angular/forms";
import { Quote } from "../quote/quote.model";

export interface JournalEntryGroup {
    date: FormControl<Date>;
    quote: FormControl<Quote>;
    userText: FormControl<string>;
}

export interface JournalEntry {
    date: Date;
    quote: Quote;
    entry: string;
}