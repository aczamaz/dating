import { required, isMail, isNumber, sinsPassword, isNotBigAge} from '../../../utils/validations';
export const checkRegistrationForm = {
    name: [required],
    email: [isMail],
    password: [required],
    rePassword: [sinsPassword],
    gender:[required],
    age:[isNumber,isNotBigAge],
    srcImage: [required]
};
