import { isInteger } from "lodash";

export const requiredInput = (input) =>
    input ? undefined : `Требуется ввод`;
export const longPasswordLessThen6 = (input) =>
    input.length > 5 ? undefined : 'Слишком короткий пароль';
export const isNumber = (input) =>
    isInteger(Number(input)) ? undefined : 'Значение должно быть числом';
export const isNotLongNember = (input) =>
    String(input).length < 4 ? undefined : 'Значение cлишком большое';
