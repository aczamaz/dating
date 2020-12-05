//проверка на сушествовование
export const required = (value) => {
    return (!value || value === undefined) ? "заполните" : false;
};
//проверка на коректность почты
export const isMail = (value) =>
{
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Не коректная почта'
    }
    else
    {
        return false;
    }
}
//проверка на то что значение число
export const isNumber = (value) => {
    return isNaN(value) ? "не число" : false;
};
//проверка на то что пароли совпадают
export const sinsPassword = (value, values) => {
    if (!value || !values["password"]) return "пароли не совпадают";
    const length =
    value.lenght >= values["password"].length
    ? values["name"].length
    : value.length;
    for (let i = 0; i < length; i++) {
        if (value[i] !== values["password"][i]) return "пароли не совпадают";
    }
    return false;
};
//проверка на то что возраст адекватный
export const isNotBigAge = (value) =>
{
    return String(value).length > 3 ? 'Слишком длинное значение' : false;
}
