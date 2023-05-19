import { inject, Injectable } from '@angular/core';
import { jsPDF } from "jspdf";

import { LocalStorageService } from '../storage/local.storage.service';

import { Submission } from '../storage/local.storage.service.model';
import { JournalEntry } from './journal.model';
import { JournalServiceBase } from './base.journal.service';


@Injectable({
    providedIn: 'root'
})
export class PDFJournalService implements JournalServiceBase {
    private localStorageService: LocalStorageService = inject(LocalStorageService);

    constructor() { }

    downloadEntry(formValue: JournalEntry): void {
        console.log('Test to make sure latest code');
        // Download pdf of Entry
        const doc = new jsPDF();

        const quote = doc.splitTextToSize(formValue.quote.text + " - " + formValue.quote.speaker, 330);
        const entry = doc.splitTextToSize(formValue.userText, 330);

        doc.setFontSize(10);
        doc.setFont('Times');

        doc.text([
            formValue.date.toLocaleDateString(),
            " ",
            ...quote,
            " ",
            ...entry
        ], 10, 10, { lineHeightFactor: 1.5 });

        doc.save(`journal-entry-${formValue.date.toLocaleDateString()}.pdf`);
    }

    downloadFullJournal(): void {
        const doc = new jsPDF();

        const submissions = this.localStorageService.getSubmissions();

        const fullJournal = submissions.map((submission: Submission) => {
            const quote = doc.splitTextToSize(submission.entry.quote.text + " - " + submission.entry.quote.speaker, 330);
            const entry = doc.splitTextToSize(submission.entry.userText, 330);
            return [
                submission.date,
                "",
                ...quote,
                "",
                ...entry,
                "",
                "",
            ]
        }).map((entry, index: number) => {
            doc.setFontSize(10);
            doc.setFont('Times');
            if (index === 0) {
                doc.text(
                    "Philosophize - A Philosophical Journal"
                    , 80, 100, { lineHeightFactor: 1.5 });
                doc.addPage();
            }

            doc.text(
                entry
                , 10, 30, { lineHeightFactor: 1.5 });
            if (index !== submissions.length - 1) {
                doc.addPage();
            }
        });

        doc.save(`full-journal.pdf`);
    }
}
