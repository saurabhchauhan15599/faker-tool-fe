import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import AlertError from "../../../assets/icons/AlertError";
import { data_types_options } from "../../../helpers/constant";
import SelectLabel from "../select-label";
import TextField from "../text-field";

interface IColumnForm {
  name: string;
  type: string;
  isNullable: boolean;
  isPrimary: boolean;
}

const ColumnForm: React.FC = () => {
  const columnForm = useForm<IColumnForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      type: "",
      isNullable: false,
      isPrimary: false,
    },
  });
  const { control } = columnForm;

  return (
    <div>
      <FormProvider {...columnForm}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              value={field.value}
              required
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              endIcon={fieldState.invalid && <AlertError />}
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          render={({ field, fieldState }) => (
            <SelectLabel
              {...field}
              value={field.value}
              required
              options={data_types_options}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </FormProvider>
    </div>
  );
};

export default ColumnForm;
