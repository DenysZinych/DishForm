import axios from "axios";
import { IFormData } from "api/models";

const API_URL =
  "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

export const postDish = async (data: IFormData) => {
  const response = await axios.post<IFormData>(API_URL, data);
  return response;
};
