import "./index.css";
import { Container, Grid, Button, TextField } from "@mui/material";

import { Controller, useForm } from "react-hook-form";

import logo from "../../assets/logo.png";


const Login = () => {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({  });

  const onsubmit = (data) => console.log(data);
  console.log(errors);


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
    <div className="Container">
            <form onSubmit={handleSubmit(onsubmit)}>
              <div>
              <img src={logo} alt="" />

                <h2>Iniciar Sesion </h2>

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
                <Button onClick={() => reset()} variant={"text"} size="medium">
                  Iniciar Sesión
                </Button>
                <Button onClick={handleSubmit(onsubmit)} variant={"contained"} size="medium">Siguiente</Button>
               
              </div>
            </form>
      
      {/* como esto es un form tiene un evento llamando onSubmit */}
    </div>
  );
};

export default Login;