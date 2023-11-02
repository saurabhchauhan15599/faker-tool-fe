import { Button } from "@mui/joy";
import { Controller, useFormContext } from "react-hook-form";
import {
  BU_DROPDOWN,
  DESIGNATION_DROPDOWN,
  EMP_STATUS_DROPDOWN,
  STATUS_DROPDOWN,
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
  const { control, handleSubmit, setValue } = useFormContext();
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        {type === "Client" && (
          <section className={css.formFields}>
            <div className={css.fields}>
              <Controller
                name={"name"}
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Name"
                    required
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
                    required
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
                    required
                    label="Company Size"
                    placeholder="Enter designation.."
                    error={fieldState.invalid}
                    endIcon={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </section>
        )}
        {type === "Project" && (
          <section className={css.formFields}>
            <div className={css.fields}>
              <Controller
                name={"name"}
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Name"
                    required
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
                    required
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
                    required
                    value={
                      field.value
                        ? {
                            value: field.value,
                            label: field.value,
                          }
                        : ""
                    }
                    onChange={(newValue: any) =>
                      setValue("status", newValue.label)
                    }
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
            </div>
          </section>
        )}
        {type === "Employee" && (
          <section className={css.formFields}>
            <div className={css.fields}>
              <Controller
                name={"name"}
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    required
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
                    required
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
                    required
                    label="Salary"
                    placeholder="Enter salary.."
                    error={fieldState.invalid}
                    endIcon={fieldState.invalid}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className={css.fields}>
              <Controller
                name={`designation`}
                control={control}
                render={({ field, fieldState }) => (
                  <SelectLabel
                    {...field}
                    required
                    value={
                      field.value
                        ? {
                            value: field.value,
                            label: field.value,
                          }
                        : ""
                    }
                    onChange={(newValue: any) =>
                      setValue("designation", newValue.label)
                    }
                    getOptionLabel={(option: any) => option.label}
                    getOptionValue={(option: any) => option.value}
                    options={DESIGNATION_DROPDOWN}
                    label="Designation"
                    placeholder="Enter designation.."
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    menuPlacement="top"
                  />
                )}
              />
              <Controller
                name={`businessUnit`}
                control={control}
                render={({ field, fieldState }) => (
                  <SelectLabel
                    {...field}
                    required
                    value={
                      field.value
                        ? {
                            value: field.value,
                            label: field.value,
                          }
                        : ""
                    }
                    onChange={(newValue: any) =>
                      setValue("businessUnit", newValue.label)
                    }
                    getOptionLabel={(option: any) => option.label}
                    getOptionValue={(option: any) => option.value}
                    options={BU_DROPDOWN}
                    label="Business Unit"
                    placeholder="Enter BU.."
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    menuPlacement="top"
                  />
                )}
              />
              <Controller
                name={`empStatus`}
                control={control}
                render={({ field, fieldState }) => (
                  <SelectLabel
                    {...field}
                    required
                    value={
                      field.value
                        ? {
                            value: field.value,
                            label: field.value,
                          }
                        : ""
                    }
                    onChange={(newValue: any) =>
                      setValue("empStatus", newValue.label)
                    }
                    getOptionLabel={(option: any) => option.label}
                    getOptionValue={(option: any) => option.value}
                    options={EMP_STATUS_DROPDOWN}
                    label="Employee Status"
                    placeholder="Enter status.."
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    menuPlacement="top"
                  />
                )}
              />
            </div>
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
