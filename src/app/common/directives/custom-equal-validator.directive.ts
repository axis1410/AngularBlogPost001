import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appCustomEqualValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CustomEqualValidatorDirective, multi: true }],
})
export class CustomEqualValidatorDirective implements Validator {
    @Input() appCustomEqualValidator!: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent?.get(this.appCustomEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { notEqual: true };
        }
        return null;
    }
}
