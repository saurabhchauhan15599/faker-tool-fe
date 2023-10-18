import * as yup from 'yup';

export const PersonalDetailsSchema = yup.object().shape({
  name: yup.string().trim().required('Name is required').matches(/^[a-z A-Z]+$/, 'Not a valid name'),
  email: yup.string().email().trim().required('Email id is required'),
});
