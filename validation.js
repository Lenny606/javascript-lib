function validation(inputForValidations) {
    let isValid = true;

    if (inputForValidations.required) {
        isValid = isValid && inputForValidations.value.toString().trim().length !== 0;
    }

    if (inputForValidations.minlength !== null && typeof inputForValidations.value === 'string') {
        isValid = isValid && inputForValidations.value.length > validationsRules.minlength
    }
}

const validationsRules = {
    value: enteredValue,
    required: true,
    minlength: 5,
    maxlength: 20
}

const stringInput = {
    value: enteredValue,
    required: true,
    minlength: 10,
    maxlength: 20
}

if (!validate(stringInput)) {
    throw new Error('Invalid input')
    return
} else {
    return stringInput.value
}
