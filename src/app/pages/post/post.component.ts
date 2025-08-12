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

@Component({
  standalone: true,
  selector: 'app-post',
  imports: [ReactiveFormsModule, TuiButton],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  private request = inject(RequestService);
  private _fb = inject(FormBuilder);
  protected isActive = signal(true);

  todo?: ToDo[] = [];
  formTodo?: ToDo = {
    id: 0,
    title: 'string',
    description: 'string',
    created: '2025-07-13T15:15:04.428Z',
    lastUpdated: '2025-07-13T15:15:04.428Z',
    isCompleted: true,
  };

  protected todoFormGroup = new FormGroup({
    title: new FormControl('Base text', [Validators.required]),
    description: new FormControl('null'),
    created: new FormControl('null'),
    lastUpdated: new FormControl('null'),
  });

  protected FormGroup = new FormGroup({
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
    this.request
      .getPosts()
      .pipe()
      .subscribe((data) => {
        this.todo = data;
      });
  }

  public send(): void {
    try {
      const controls = this.todoFormGroup.controls;
      if (this.todoFormGroup.valid) {
        const titleValue = controls.title.value;

        if (this.formTodo) {
          this.formTodo.title = titleValue ?? 'NULL';
          this.request.putPost(this.formTodo).subscribe();
          console.log('Успешно отправлено dictionary проверяйте список!');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
