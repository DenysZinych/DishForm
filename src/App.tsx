import { Dispatch } from "react";
import { reset } from "redux-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IFormData } from "api/models";
import { postDish } from "api/endpoints";
import { getFormData } from "helpers";
import { DishForm } from "components";

const App = () => {
  const onSubmit = async (values: IFormData, dispatch: Dispatch<any>) => {
    try {
      const data = getFormData(values);
      await postDish(data as IFormData);
      dispatch(reset("dishForm"));
      toast.success("Dish was added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again later");
    }
  };

  return (
    <div className="App">
      <DishForm onSubmit={onSubmit} />
      <ToastContainer />
    </div>
  );
};

export default App;
