import * as yup from 'yup';
import { PHONE_NUMBER_REGEX } from '../constant';

export const registerSchema = yup.object().shape({
  mobile: yup
    .string()
    .min(10, 'Phone number must be 10 digits long!')
    .max(10, 'Phone number must be 10 digits long!')
    .matches(PHONE_NUMBER_REGEX, 'Enter Valid phone number!')
    .required('Phone number is required'),
});
