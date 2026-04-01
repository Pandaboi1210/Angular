import { AbstractControl, ValidationErrors } from '@angular/forms';

export function firstLetterCaps(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) {
    return null;
  }
  const firstLetter = value.charAt(0);
  if (firstLetter !== firstLetter.toUpperCase()) {
    return { firstLetterCaps: true };
  }
  return null;
}