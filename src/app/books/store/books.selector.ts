import { Book } from './book';
import { createFeatureSelector } from "@ngrx/store";

export const selectBooks= createFeatureSelector<Book[]>("mybooks")
