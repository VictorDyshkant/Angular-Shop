import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[emailMatchValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailMatchDirective,
        multi: true
    }]
})
export class EmailMatchDirective implements Validator {

    validate(c: AbstractControl): ValidationErrors | null {
        console.log('ss');
        if (c.value !== undefined && c.value !== null && this.validateEmail(c.value.toString())) {
            return { patternMatched: true };
        }
        else {
            return null;
        }
    }

    private validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
