import { Injectable } from '@angular/core';

import { Submission, UnparsedSubmission } from './local.storage.service.model';
import { Quote } from '../quote/quote.model';


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    storeQuotes(quotes: Quote[]): void {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }

    quotesExist(): string {
        return localStorage.getItem('quotes');
    }

    getQuotes(): Quote[] {
        return JSON.parse(localStorage.getItem('quotes'));
    }

    submitEntry(key: string, value: string): void {
        let submissions = localStorage.getItem('submissions');

        submissions ? localStorage.setItem('submissions', JSON.stringify([...JSON.parse(submissions), { date: key, entry: value }])) : localStorage.setItem('submissions', JSON.stringify([{ date: key, entry: value }]));
    }

    isNewDay(): boolean {
        return !localStorage.getItem('today') || localStorage.getItem('today') !== new Date().toLocaleDateString();
    }

    removeSubmittedStatus() {
        localStorage.removeItem('submitted');
    }

    setTodaysDate(): void {
        localStorage.setItem('today', new Date().toLocaleDateString());
    }

    setTodaysIndex(index: string): void {
        localStorage.setItem('todaysIndex', index);
    }

    getTodaysIndex(): string {
        return localStorage.getItem('todaysIndex');
    }

    getSubmittedStatus(): string {
        return localStorage.getItem('submitted');
    }

    setSubmitted(): void {
        localStorage.setItem('submitted', 'true');
    }

    getSubmissions(): Submission[] {
        return JSON.parse(localStorage.getItem('submissions')).map((submission: UnparsedSubmission) => {
            return { ...submission, entry: JSON.parse(submission.entry) }
        })
    }
}
