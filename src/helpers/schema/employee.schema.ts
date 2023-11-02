import * as yup from "yup";

export const employeeFormSchema = yup.object().shape({
  limit: yup
    .string()
    .matches(/^\d+$/, "Limit should only contain numbers")
    .required("Field is required!"),
  min: yup
    .string()
    .required("Field is required!")
    .matches(/^\d+$/, "Limit should only contain numbers")
    .typeError("Limit should be number")
    .min(0, "Can't be less than zero!"),
  max: yup
    .string()
    .required("Field is required!")
    .matches(/^\d+$/, "Limit should only contain numbers")
    .max(99999999999999, "Can't be more than 14 digits"),
  designation: yup.string().required("Field is required!"),
});

export const employeeSchema = yup.object().shape({
  employees: yup.array().of(employeeFormSchema),
});

export const updateFormSchema = yup.object().shape({
  name: yup.string().required("Field is required!"),
  designation: yup.string().required("Field is required!"),
  representativeName: yup.string().required("Field is required!"),
  businessUnit: yup.string().required("Field is required!"),
  status: yup.string().required("Field is required!"),
  empStatus: yup.string().required("Field is required!"),
  emailId: yup.string().required("Field is required!"),
  companySize: yup
    .string()
    .required("Field is required!")
    .matches(/^\d+$/, "Limit should only contain numbers")
    .min(0, "Can't be less than zero!"),
  salary: yup
    .string()
    .required("Field is required!")
    .matches(/^\d+$/, "Limit should only contain numbers")
    .max(99999999999999, "Can't be more than 14 digits"),
});
