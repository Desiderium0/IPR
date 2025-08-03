import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [NgIf],
  templateUrl: './ng-container.html',
  styleUrl: './ng-container.scss',
})
export class NgContainer {
  protected isActive = signal(true);

  public activateBlock(): void {
    this.isActive.update((value) => !value);
  }
}
