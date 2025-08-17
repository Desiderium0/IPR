import { DestroyRef, inject, Pipe, PipeTransform } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ToDo } from '../types/todo';

@Pipe({
  name: 'sortTodo',
  pure: false,
})
export class SortTodoPipe implements PipeTransform {
  private destroyRef = inject(DestroyRef);

  transform(values$: Observable<ToDo[]>): Observable<ToDo[]> {
    return values$.pipe(
      map((el) => {
        const sorted = [...el];
        sorted.sort((a, b) => a.id - b.id);
        return sorted;
      })
    );
  }
}
