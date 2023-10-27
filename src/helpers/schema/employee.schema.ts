import * as yup from "yup";

export const employeeFormSchema = yup.object().shape({
  limit: yup
    .string()
    .trim()
    .typeError("Limit should be number")
    .required("Field is required!"),
  min: yup
    .string()
    .trim()
    .required("Field is required!")
    .min(0, "Can't be less than zero!"),
  max: yup
    .string()
    .trim()
    .required("Field is required!")
    .max(99999999999999, "Can't be more than 14 digits"),
});
