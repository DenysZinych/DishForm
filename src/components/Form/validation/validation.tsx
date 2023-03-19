import { IFormData } from "api";

const required = (value: string) =>
  value ? undefined : "This field is required";

export const validate = (values: IFormData) => {
  const errors: Partial<IFormData> = {};

  if (!values.name) {
    errors.name = required(values.name);
  }

  if (!values.type) {
    errors.type = required(values.type);
  }

  if (!values.preparation_time) {
    errors.preparation_time = required(values.preparation_time);
  }

  if (values.type === "pizza" && !values.no_of_slices) {
    errors.no_of_slices = required(values.no_of_slices as string);
  }

  if (values.type === "pizza" && !values.diameter) {
    errors.diameter = required(values.diameter as string);
  }

  if (values.type === "soup" && !values.spiciness_scale) {
    errors.spiciness_scale = required(values.spiciness_scale as string);
  }

  if (values.type === "sandwich" && !values.slices_of_bread) {
    errors.slices_of_bread = required(values.slices_of_bread as string);
  }

  return errors;
};
