import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
    username: Yup.string().min(1).max(45).required('Username is required'), 
    password: Yup.string().min(1).max(45).required('Password is required'),
})