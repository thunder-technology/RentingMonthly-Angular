import {FormControl, FormGroup} from '@angular/forms';

export const validateAllFormFields = (fb: FormGroup) => {
    Object.keys(fb.controls).forEach(field => {
        const ctrl = fb.get(field);
        if (ctrl instanceof FormControl) {
            ctrl.markAsTouched({ onlySelf: true});
        } else if ( ctrl instanceof FormGroup) {
            this.validateAllFormFields(ctrl);
        }
    });
};

export const merge = (obj1, obj2) => {
    const answer: object = {};
    for (const key in obj1) {
        if (answer[key] === undefined || answer[key] === null || answer[key] === '' || answer[key] === 0) {
            answer[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (answer[key] === undefined || answer[key] === null || answer[key] === '' || answer[key] === 0) {
            answer[key] = obj2[key];
        }
    }
    return answer;
};
