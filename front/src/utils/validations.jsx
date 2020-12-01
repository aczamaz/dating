const checkField = (checks,value,secondValue = null) =>
{
    if (checks.indexOf('required') !==-1)
    {
        if (!value || value === undefined)
        {
            return 'Заполните поле'
        }
    }
    if (checks.indexOf('mail') !== -1)
    {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        {
            return 'Не коректная почта'
        }
    }
    if (checks.indexOf('similar') !== -1)
    {
        if (value !== secondValue)
        {
            return 'Пароли не совпадают'
        }
    }
    if (checks.indexOf('number') !== -1)
    {
        if (isNaN(Number(value)))
        {
            return 'Значение должно быть числом'
        }
    }
    if (checks.indexOf('notBig') !== -1)
    {
        if (String(value).length > 3 ) {
            return 'Слишком длинное значение'
        }
    }
}

export const registrationValidator = (values) =>
{
    const errors = {}

    errors.name = checkField(['required'], values.name);
    errors.email = checkField(['required','mail'], values.email);
    errors.password = checkField(['required'], values.password);
    errors.rePassword = checkField(['required','similar'], values.rePassword, values.password);
    errors.age = checkField(['required', 'number','notBig'], values.age);
    errors.srcImage = checkField(['required'], values.srcImage);

    return errors
}
