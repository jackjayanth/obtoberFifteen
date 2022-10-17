import {
  BooksService
} from './../books.service';
import {
  Injectable
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType
} from '@ngrx/effects';
import {
  booksFetchAPISuccess,
  invokeBooksAPI
} from './books.action';
import {
  from,
  map,
  mergeMap,
  switchMap
} from 'rxjs';


@Injectable()
export class BooksEffect {

  constructor(private actions$: Actions, private bookService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
      switchMap(() => {
        return this.bookService.get()
          .pipe(map((data) => booksFetchAPISuccess({
            allBooks: data
          })))
      })
    ));

  }
