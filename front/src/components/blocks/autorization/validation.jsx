import { required, isMail} from '../../../utils/validations';
export const checkAutorizationForm = {
    email: [required,isMail],
    password: [required],
};
