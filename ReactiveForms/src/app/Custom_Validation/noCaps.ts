import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noCaps(control: AbstractControl): ValidationErrors | null {
    if (control.value && !/^[A-Z]/.test(control.value)) {
        return { noCapsq
            : true };
    }
    return null;
}