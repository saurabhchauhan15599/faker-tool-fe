import { Button } from "@mui/joy";
import { Controller, useFormContext } from "react-hook-form";
import {
  STATUS_DROPDOWN,
  designationDropdown,
} from "../../../helpers/constant";
import SelectLabel from "../select-label";
import TextField from "../text-field";
import css from "./index.module.scss";

interface IUpdateForm {
  onFormSubmit: (data: any) => void;
  type: "Client" | "Employee" | "Project";
  handleClose: () => void;
}

const UpdateForm = (props: IUpdateForm) => {
  const { onFormSubmit, type, handleClose } = props;
  const { control, handleSubmit } = useFormContext();
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        {type === "Client" && (
          <section className={css.formFields}>
            <Controller
              name={"name"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Name"
                  placeholder="Enter name.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"representativeName"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Representative Name"
                  placeholder="Enter name.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"companySize"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Company Size"
                  placeholder="Enter designation.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </section>
        )}
        {type === "Project" && (
          <section className={css.formFields}>
            <Controller
              name={"name"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Name"
                  placeholder="Enter name.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"businessUnit"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Business Unit"
                  placeholder="Enter BU.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"status"}
              control={control}
              render={({ field, fieldState }) => (
                <SelectLabel
                  {...field}
                  options={STATUS_DROPDOWN}
                  label="Status"
                  placeholder="Select status.."
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  getOptionLabel={(option: any) => option.label}
                  getOptionValue={(option: any) => option.value}
                />
              )}
            />
          </section>
        )}
        {type === "Employee" && (
          <section className={css.formFields}>
            <Controller
              name={"name"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Name"
                  placeholder="Enter name.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"emailId"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  placeholder="Enter email.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={"salary"}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Salary"
                  placeholder="Enter salary.."
                  error={fieldState.invalid}
                  endIcon={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={`designation`}
              control={control}
              render={({ field, fieldState }) => (
                <SelectLabel
                  {...field}
                  getOptionLabel={(option: any) => option.label}
                  getOptionValue={(option: any) => option.value}
                  options={designationDropdown}
                  label="Designation"
                  placeholder="Enter designation.."
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  menuPlacement="top"
                />
              )}
            />
          </section>
        )}
        <section className={css.btnContainer}>
          <Button type="submit" color="success">
            Submit
          </Button>
          <Button variant="soft" color="warning" onClick={handleClose}>
            Close
          </Button>
        </section>
      </form>
    </div>
  );
};

export default UpdateForm;
