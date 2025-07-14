import { Component } from '@angular/core';
import { ToDo } from 'shared/models/todo.component';
import { RequestService } from 'shared/services/request.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-post',
  imports: [ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  todo?: ToDo[] = [];
  formTodo?: ToDo = {
    id: 0,
    title: 'string',
    description: 'string',
    created: '2025-07-13T15:15:04.428Z',
    lastUpdated: '2025-07-13T15:15:04.428Z',
    isCompleted: true,
  };

  todoFormGroup = new FormGroup({
    title: new FormControl('Base text', [Validators.required]),
    description: new FormControl('null'),
    created: new FormControl('null'),
    lastUpdated: new FormControl('null'),
  });

  constructor(private request: RequestService) {}

  load(): void {
    this.request
      .getPosts()
      .pipe()
      .subscribe((data) => {
        this.todo = data;
      });
  }

  send(): void {
    try {
      const controls = this.todoFormGroup.controls;
      if (this.todoFormGroup.valid) {
        const titleValue = controls.title.value;

        if (this.formTodo) {
          this.formTodo.title = titleValue ?? 'NULL';
          this.request.putPost(this.formTodo).subscribe();
          console.log('Успешно отправлено проверяйте список!');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
