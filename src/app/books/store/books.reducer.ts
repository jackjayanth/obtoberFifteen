import {
  createReducer,
  on
} from "@ngrx/store";
import {
  Book
} from "./book";
import {
  booksFetchAPISuccess
} from "./books.action";

export const initalState: ReadonlyArray < Book > = [{
  "id": 1,
  "name": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "cost": 300
}];

export const bookReducer = createReducer(initalState,

  on(booksFetchAPISuccess, (state, {
    allBooks
  }) => {
    return allBooks;
  })
)
