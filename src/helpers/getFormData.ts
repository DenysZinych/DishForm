import { IFormData } from "api";

export const getFormData = (values: IFormData) => {
  const {
    name,
    type,
    preparation_time,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = values;

  if (type === "pizza") {
    return { name, type, preparation_time, no_of_slices, diameter };
  }

  if (type === "soup") {
    return { name, type, preparation_time, spiciness_scale };
  }

  if (type === "sandwich") {
    return { name, type, preparation_time, slices_of_bread };
  }
};
