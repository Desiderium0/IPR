import { Component } from '@angular/core';
import { PostComponent } from "shared/components/post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [PostComponent]
})
export class AppComponent {
  title = 'OnIPR';
}
