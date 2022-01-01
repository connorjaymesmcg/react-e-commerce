import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  //Update as of 4/26/2021: Controller now requires a render prop for react-hook-form.
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <TextField {...field} label={label} fullWidth required />}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
};

export default FormInput;
