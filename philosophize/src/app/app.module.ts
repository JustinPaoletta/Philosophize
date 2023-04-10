import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JournalComponent } from './journal/journal.component';

import { LocalStorageService } from './storage/local.storage.service';
import { TodaysSubmissionViewComponent } from './main/submission-views/todays-submission-view/todays-submission-view.component';
import { CompletedJournalViewComponent } from './main/submission-views/completed-journal-view/completed-journal-view.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from './quote/quote.service';
import { JournalServiceBase } from './journal/base.journal.service';
import { PDFJournalService } from './journal/pdf.journal.service';
import { MessageComponent } from './common/ui/message/message.component';

@NgModule({
  declarations: [
    AppComponent, QuoteComponent, MainComponent, JournalComponent, TodaysSubmissionViewComponent, CompletedJournalViewComponent, MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    TextFieldModule,
    MatButtonModule
  ],
  providers: [
    QuoteService, LocalStorageService, { provide: JournalServiceBase, useClass: PDFJournalService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
