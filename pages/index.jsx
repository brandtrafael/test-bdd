import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("Password", "");
  const onSubmit = (data) => {
    return window.alert("successfully registered user");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" mb={2}>
        Register
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="username"
            error={errors.Username}
            helperText={errors.Username?.message}
            label="Username"
            variant="outlined"
            {...register("Username", {
              required: {
                value: true,
                message: "Please, insert your username",
              },
              minLength: {
                value: 4,
                message: "The minimum characters for this field is 4",
              },
              maxLength: {
                value: 20,
                message: "The max characters for this field is 20",
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            type="password"
            error={errors.Password}
            helperText={errors.Password?.message}
            label="Password"
            variant="outlined"
            {...register("Password", {
              required: {
                value: true,
                message: "Please, insert your password",
              },
              minLength: {
                value: 6,
                message: "The minimum characters for this field is 6",
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="confirm-password"
            type="password"
            error={errors.ConfirmPassword}
            helperText={
              errors.ConfirmPassword?.message ||
              (errors.ConfirmPassword?.type === "passwordIsEqual" &&
                "Password not match")
            }
            label="ConfirmPassword"
            variant="outlined"
            {...register("ConfirmPassword", {
              required: {
                value: true,
                message: "Please, insert your password",
              },
              validate: {
                passwordIsEqual: (value) => Boolean(password.current === value),
              },
              minLength: {
                value: 6,
                message: "The minimum characters for this field is 6",
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
