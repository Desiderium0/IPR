import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NonNumberFiveValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const noneFive = new RegExp(/^[^5]*$/);
  if (value && !noneFive.test(value)) {
    return { nonFive: true };
  }
  return null;
}
