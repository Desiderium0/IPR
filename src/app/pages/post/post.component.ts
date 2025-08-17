import { Component, inject, signal } from '@angular/core';
import { ToDo } from 'src/app/shared/types/todo';
import { RequestService } from 'src/app/shared/services/request.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UpperTotwoPipe } from 'src/app/shared/pipes/upper-totwo-pipe';
import { SortTodoPipe } from 'src/app/shared/pipes/sort-todo-pipe';
import { Rate } from 'src/app/pages/rate/rate';
import { NonNumberFiveValidator } from 'src/app/shared/validators/nonNumberFive';

@Component({
  standalone: true,
  selector: 'app-post',
  imports: [ReactiveFormsModule, TuiButton, AsyncPipe, UpperTotwoPipe, Rate],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private request = inject(RequestService); // Для C# API  #1
  private _fb = inject(FormBuilder);
  private pipe = new SortTodoPipe();
  protected todoList$: Observable<ToDo[]> = of();
  protected isActive = signal(true);

  protected todoFormGroup = new FormGroup({
    title: new FormControl('Base text', [Validators.required]),
    description: new FormControl('null'),
    created: new FormControl('null'),
    lastUpdated: new FormControl('null'),
  });

  //  ^  форм группа можно писать сложные валидации
  //  |    |
  //  |    |
  //       V  форм билдер сокращенная запись

  protected todoForm = this._fb.group({
    title: ['title', [Validators.required]],
    description: ['description'],
    created: ['created'],
    lastUpdated: ['lastUpdated'],
  });

  public activate(): void {
    this.isActive.update((value) => !value);
  }

  public load(): void {
    this.todoList$ = MockTodo.getToDo();
    this.request.getPosts(); // Для C# API  #1
  }

  public send(): void {
    try {
      const controls = this.todoFormGroup.controls;
      if (this.todoFormGroup.valid) {
        const titleValue = controls.title.value;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public sortByAsc(): void {
    this.todoList$ = this.pipe.transform(this.todoList$);
  }

  public controlAccessorGroup = this._fb.group({
    controlCounter: [0, Validators.max(10)],
    controlChecker: [0, Validators.required],
    controlText: ['', NonNumberFiveValidator],
  });
}

class MockTodo {
  static getToDo(): Observable<ToDo[]> {
    return of<ToDo[]>([
      {
        id: 82,
        title: 'title',
        description: 'description',
        created: 'created',
        lastUpdated: 'lastUpdated',
        isCompleted: false,
      },
      {
        id: 100,
        title: 'title',
        description: 'description',
        created: 'created',
        lastUpdated: 'lastUpdated',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'title',
        description: 'description',
        created: 'created',
        lastUpdated: 'lastUpdated',
        isCompleted: false,
      },
      {
        id: 81,
        title: 'title',
        description: 'description',
        created: 'created',
        lastUpdated: 'lastUpdated',
        isCompleted: false,
      },
      {
        id: 31,
        title: 'title',
        description: 'description',
        created: 'created',
        lastUpdated: 'lastUpdated',
        isCompleted: false,
      },
    ]);
  }
}
