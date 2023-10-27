import { Button } from "@mui/joy";
import { useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import TrashCanIcon from "../../../assets/icons/TrashCanIcon";
import { designationDropdown } from "../../../helpers/constant";
import { validateLimit } from "../../../helpers/utils";
import Typography from "../../base/typography";
import SelectLabel from "../select-label";
import TextField from "../text-field";
import css from "./index.module.scss";

interface IAddForm {
  type: "Client" | "Project" | "Employee";
  onSubmit: (data: any) => void;
  handleClose?: () => void;
  handleSubmit?: () => void;
  setLimit: (limit: string) => void;
  limit: string;
}

const AddForm = (props: IAddForm) => {
  const { type, onSubmit, handleClose, setLimit, limit, handleSubmit } = props;
  const [isValid, setIsValid] = useState(false);
  const { control, handleSubmit: onFormSubmit } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "employees",
    control,
  });

  const handleAddField = () => {
    append({
      limit: "",
      min: "",
      max: "",
      designation: "",
    });
  };

  const handleLimitChange = (text: string) => {
    const isValid = validateLimit(text);
    setIsValid(isValid);
  };

  return (
    <div className={css.container}>
      {type === "Employee" && (
        <section className={css.formFields}>
          <Button
            className={css.add}
            variant="soft"
            color="success"
            onClick={handleAddField}
          >
            Add Query
          </Button>
          <form noValidate onSubmit={onFormSubmit(onSubmit)}>
            {fields?.map((item, index) => {
              const handleDeleteClick = () => remove(index);
              return (
                <div className={css.employee} key={index}>
                  <Typography className={css.text}>{index + 1}.</Typography>
                  <Controller
                    key={item.id}
                    name={`employees.${index}.limit`}
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label="Limit"
                        placeholder="Enter limit.."
                        error={fieldState.invalid}
                        endIcon={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    key={item.id}
                    name={`employees.${index}.designation`}
                    control={control}
                    render={({ field, fieldState }) => (
                      <SelectLabel
                        {...field}
                        options={designationDropdown}
                        label="Designation"
                        placeholder="Enter designation.."
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                        menuPlacement="top"
                      />
                    )}
                  />
                  <Controller
                    key={item.id}
                    name={`employees.${index}.min`}
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        label="Minimum Salary"
                        placeholder="Enter limit.."
                        error={fieldState.invalid}
                        endIcon={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                  <Controller
                    key={item.id}
                    name={`employees.${index}.max`}
                    control={control}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        value={`${field.value}`.toLocaleString()}
                        label="Maximum Salary"
                        placeholder="Enter limit.."
                        error={fieldState.invalid}
                        endIcon={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                  <TrashCanIcon
                    onClick={handleDeleteClick}
                    style={{ cursor: "pointer", marginTop: "1rem" }}
                  />
                </div>
              );
            })}
            <section className={css.btnContainer}>
              <Button color="success" type="submit">
                Submit
              </Button>
              <Button variant="soft" color="warning" onClick={handleClose}>
                Close
              </Button>
            </section>
          </form>
        </section>
      )}
      {(type === "Client" || type === "Project") && (
        <div className={css.secondary}>
          <section className={css.client}>
            <TextField
              label="Limit"
              value={limit}
              placeholder="Enter limit.."
              onChange={(e) => {
                setLimit(e.target.value);
                handleLimitChange(e.target.value);
              }}
            />
            {!isValid ? (
              <p className={css.error}>Limit must be a number</p>
            ) : (
              <></>
            )}
          </section>
          <section className={css.btnContainer}>
            <Button color="success" onClick={handleSubmit} disabled={!isValid}>
              Submit
            </Button>
            <Button variant="soft" color="warning" onClick={handleClose}>
              Close
            </Button>
          </section>
        </div>
      )}
    </div>
  );
};

export default AddForm;
