import { JournalEntry } from "./journal.model";

export abstract class JournalServiceBase {
    public abstract downloadEntry(formValue: JournalEntry): void

    public abstract downloadFullJournal(): void
}