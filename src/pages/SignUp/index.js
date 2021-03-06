import "./index.css";
import { Container, Grid, Button, TextField, Dialog } from "@mui/material";

import { Controller, useForm } from "react-hook-form";

import logo from "../../assets/logo.png";
import signUp from "../../assets/signUp.png";
import Login from "../../components/Login";
import { useState } from "react";

const SignUp = () => {
const [open, setOpen] = useState(false)
const handleClose=()=>{
setOpen(false)
}
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ });

  const onsubmit = (data) => console.log(data);
  console.log(errors);

  const rulesText = {
    required: { value: true, message: "Campo requerido" },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "Ingresar solo letras",
    },
    minLength: {
      value: 3,
      message: "Mínimo 3 caracteres",
    },
    maxLength: {
      value: 80,
      message: "Máximo 80 caracteres",
    },
  };

  const rulesEmail = {
    required: { value: true, message: "Campo requerido" },
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "Ingresar un email valido",
    },
  };
  const rulesContraseña = {
    required: { value: true, message: "Campo requerido" },
    pattern: {
      value:/[a-zA-Z0-9]{8}/,
      message: "Ingresa 8 carácteres que cuenten con letras y números",
    },
  };
  

  return (
    <div className="bg">
      <Container className="Container">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <form onSubmit={handleSubmit(onsubmit)}>
              <img src={logo} alt="" />

              <h2>Crea una cuenta en Peques</h2>
              <div className="div-input">
                <Controller
                  name={"nombre"}
                  control={control}
                  rules={rulesText}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      label={"Nombre"}
                      helperText={error ? error.message : null}
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name={"apellidos"}
                  control={control}
                  rules={rulesText}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      error={error ? true : false}
                      onChange={onChange}
                      value={value}
                      label={"Apelllidos"}
                      helperText={error ? error.message : null}
                      fullWidth
                    />
                  )}
                />
              </div>
              <div className="div-input">
                <Controller
                  name={"email"}
                  control={control}
                  rules={rulesEmail}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      error={error ? true : false}
                      onChange={onChange}
                      value={value}
                      label={"Ingresar email"}
                      helperText={error ? error.message : null}
                      type="email"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div >
                <Controller
                  name={"password"}
                  control={control}
                  rules={rulesContraseña}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      error={error ? true : false}
                      onChange={onChange}
                      value={value}
                      label={"Ingresar password"}
                      helperText={
                        error
                          ? error.message
                          : "Utiliza 8 carácteres que cuenten con letras y números"
                      }
                      type="password"
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className="botom">
                <Button onClick={() => setOpen(true)} variant={"text"} size="medium">
                  Iniciar Sesión
                </Button>
                <Button onClick={handleSubmit(onsubmit)} variant={"contained"} size="medium">Siguiente</Button>
               
              </div>
            </form>
          </Grid>

          <Grid item md={5} xs={12}>
            <img src={signUp} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open}
      onClose={handleClose}
      
      >
        <Login/>

      </Dialog>
      {/* como esto es un form tiene un evento llamando onSubmit */}
    </div>
  );
};

export default SignUp;
