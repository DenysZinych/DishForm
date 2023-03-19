import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const NameField: React.FC<any> = ({ input, meta }) => {
  const error = meta.touched && meta.error;
  const serverError = meta.touched && meta.submitError;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      placeholder="Enter dish name"
      id="outlined-basic"
      variant="outlined"
      label="Name"
      error={!!error || !!serverError}
      helperText={error}
      {...input}
    />
  );
};

export const PreparationTimeField: React.FC<any> = ({ input, meta }) => {
  const error = meta.touched && meta.error;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{ step: 1 }}
      label="Preparation time"
      type="time"
      error={!!error}
      helperText={error}
      {...input}
    />
  );
};

export const DishTypeSelect: React.FC<any> = ({ input, meta }) => {
  const error = meta.touched && meta.error;

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <InputLabel id="dish-type-helper-label">Dish type</InputLabel>
      <Select
        labelId="dish-type-label"
        label="Dish type"
        id="dish-type-helper"
        error={!!error}
        helperText={error}
        {...input}
      >
        <MenuItem value={"pizza"}>Pizza</MenuItem>
        <MenuItem value={"soup"}>Soup</MenuItem>
        <MenuItem value={"sandwich"}>Sandwich</MenuItem>
      </Select>
    </FormControl>
  );
};

export const SlicesNumberField: React.FC<any> = ({ input, meta }) => {
  const error = meta.touched && meta.error;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0 } }}
      placeholder="Enter number of slices"
      label="Number of slices"
      id="outlined-number"
      type="number"
      error={!!error}
      helperText={error}
      {...input}
    />
  );
};

export const DiameterField: React.FC<any> = ({ input, step = "0.1", meta }) => {
  const error = meta.touched && meta.error;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: 0,
        step: step,
      }}
      placeholder="Enter diameter"
      label="Diameter"
      type="number"
      variant="outlined"
      error={!!error}
      helperText={error}
      {...input}
    />
  );
};

export const SpicinessScaleField: React.FC<any> = ({ input, meta }) => {
  const error = meta.touched && meta.error;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 1, max: 10 } }}
      placeholder="Enter your spiciness scale"
      label="Spiciness scale"
      id="outlined-number"
      type="number"
      error={!!error}
      helperText={error}
      {...input}
    />
  );
};

export const SlicesOfBreadField: React.FC<any> = ({ input, meta }) => {
  const error = meta.touched && meta.error;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0 } }}
      placeholder="Enter number of slices of bread"
      label="Number of slices of bread"
      id="outlined-number"
      type="number"
      error={!!error}
      helperText={error}
      {...input}
    />
  );
};
