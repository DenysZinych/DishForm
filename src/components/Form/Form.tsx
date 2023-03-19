import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Box, Button, Typography } from "@mui/material";
import { IFormData } from "api";
import {
  NameField,
  PreparationTimeField,
  DishTypeSelect,
  SpicinessScaleField,
  SlicesNumberField,
  SlicesOfBreadField,
  DiameterField,
} from "./InputFields";
import { validate } from "./validation";
import styles from "./Form.module.scss";

const Form = (props: any) => {
  const { handleSubmit, selectedDishType } = props;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 300 },
      }}
      autoComplete="off"
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5">Add a Dish</Typography>
      <Field
        name="name"
        component={NameField}
      />
      <Field
        name="preparation_time"
        component={PreparationTimeField}
      />
      <Field
        name="type"
        component={DishTypeSelect}
      />
      {selectedDishType === "pizza" && (
        <>
          <Field
            name="no_of_slices"
            component={SlicesNumberField}
          />
          <Field
            step="0.01"
            name="diameter"
            component={DiameterField}
          />
        </>
      )}
      {selectedDishType === "soup" && (
        <Field
          name="spiciness_scale"
          component={SpicinessScaleField}
        />
      )}
      {selectedDishType === "sandwich" && (
        <Field
          name="slices_of_bread"
          component={SlicesOfBreadField}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

const selector = formValueSelector("dishForm");

const mapStateToProps = (state: IFormData) => ({
  selectedDishType: selector(state, "type"),
});

export const DishForm = connect(mapStateToProps)(
  reduxForm<IFormData>({
    form: "dishForm",
    validate,
  })(Form),
);
