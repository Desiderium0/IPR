import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-object-list',
  imports: [RouterOutlet],
  templateUrl: './object-list.html',
  styleUrl: './object-list.scss',
})
export class ObjectList {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  objects = myObjects;

  redirectTo(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}

export const myObjects: MyObject[] = [
  {
    title: 'titles1',
    content: 'Loren ipsum',
    id: 1,
  },
  {
    title: 'titles2',
    content: 'Loren ipsum',
    id: 2,
  },
  {
    title: 'titles3',
    content: 'Loren ipsum',
    id: 3,
  },
  {
    title: 'titles4',
    content: 'Loren ipsum',
    id: 4,
  },
];

export type MyObject = {
  title: string;
  content: string;
  id: number;
};
