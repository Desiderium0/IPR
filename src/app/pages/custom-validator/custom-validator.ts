import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NonNumberFiveValidator } from 'src/app/shared/validators/nonNumberFive';

@Component({
  selector: 'app-custom-validator',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-validator.html',
  styleUrl: './custom-validator.scss',
})
export class CustomValidator {
  private _fb = inject(FormBuilder);

  protected form = this._fb.group({
    text: ['', NonNumberFiveValidator],
  });
}
