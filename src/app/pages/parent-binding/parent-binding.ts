import { Component, effect, signal } from '@angular/core';
import { ChildBinding } from '../child-binding/child-binding';

@Component({
  selector: 'app-parent-binding',
  imports: [ChildBinding],
  templateUrl: './parent-binding.html',
  styleUrl: './parent-binding.scss',
})
export class ParentBinding {
  valueParentEmitter = 0;
  valueParent = signal(0);

  constructor() {
    effect(() => {
      console.log(this.valueParent());
    });
  }
}
