import { Quote } from "../quote/quote.model";

export interface UnparsedSubmission {
    date: string;
    entry: string;
}

export interface Submission {
    date: string;
    entry: {
        userText: string;
        quote: Quote;
    };
}
