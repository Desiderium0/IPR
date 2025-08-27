import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { MyObject, myObjects } from 'src/app/pages/object-list/object-list';

@Component({
  selector: 'app-object-item',
  imports: [RouterLink],
  templateUrl: './object-item.html',
  styleUrl: './object-item.scss',
})
export class ObjectItem implements OnInit {
  private _router = inject(ActivatedRoute);
  protected objects?: MyObject;

  public ngOnInit(): void {
    this._router.params.subscribe((params: Params) => {
      this.objects = myObjects[params['id'] - 1];
    });
  }
}
