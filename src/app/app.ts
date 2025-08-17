import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { NgContainer } from './pages/ng-container/ng-container';
import { ParentBinding } from './pages/parent-binding/parent-binding';
import { CustomValidator } from './pages/custom-validator/custom-validator';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TuiRoot,
    PostComponent,
    NgContainer,
    ParentBinding,
    CustomValidator,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
