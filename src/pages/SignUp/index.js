import "./index.css"
import { useState } from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  FormGroup,
  Checkbox,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import swal from "sweetalert";
import logo from "../../assets/logo.png"
import signUp from "../../assets/signUp.png"

const SignUp = () =>{
    const [dateSelect, setDateSelect] = useState(null);

    const [validateInputsEmpty, setValidateInputsEmpty] = useState({
      name: false,
      last_name: false,
      email: false,
      phone_number: false,
      password: false,
      address: false,
      city: false,
      date_born: false,
      document_number: false,
      gender: false,
    });
  
    // vamos a crear una variable que se encargue de manejar si es que el boton
    // esta en disabled o no
    const [buttonDisabled, setButtonDisabled] = useState(false);
  
    // vamos a crear una funcion llamada validate la cual se va a encargar
    // de poder almacenar los errores que tengas en nuestro formulario
    // nota: validate va a recibir como parametros los valores de nuestros inpus
    const validate = (values) => {
      // aca estaran nuestros errores
      // podemos validar que todos los campos sean requerido
      // para hacerlo pro podriamos usar los key de nuestro inputs y ver que si algunos
      // este vacio lance un error de que todos los campos son requeridos
      // Esto extrae los keys del objeto y los guarda en un array
      const errors = {};
      // delete values.marital_status;
      // delete values.date_born;
      // delete values.gender;
      // vamos a crear un array con los keys del objeto
      // pero antes de hacer el forEach vamos hacer un filter
      // para poder eliminar el campo marital_status del array delo objetos
      // ["name", "last_name", "email" ... "marital_status"]
      // ahora hacemos el filter sirve en si para poder eliminar el campo marital_status del array
      // queda asi ["name", "last_name", "email" ...]
      // y luego de eso hacemos recien el forEach
      Object.keys(values)
        .filter(
          (value) =>
            value !== "marital_status" ||
            value !== "date_born" ||
            values === "gender"
        )
        .forEach((value) => {
          //aca estamos comparado si es el uno de los items del objeto esta vacio
          // si este vacio entonces muestra en la consola dicho campo
          // if (values[value] === "") {
          // aca a va imprimir los nombre de los inputs que estan vacios
          //  aca deberamos usar la funcion setValidateInputsEmpty
          //   errors[value] = true;
          // } else {
          //   errors[value] = false;
          // }
          errors[value] = values[value] === "" ? true : false;
        });
      // basicamente si todos los campos de error son false entonces
      // asumimismo que todo esta lleno
  
      // Object.values(errors) Es un array que tiene los valores
      // if (Object.values(errors).includes(true)) {
      //   setButtonDisabled(true);
      // } else {
      //   setButtonDisabled(false);
      // }
      // recordemos que includes retorna true o false
      // si encuenstra al elemento es true si no false
      setButtonDisabled(Object.values(errors).includes(true));
      setValidateInputsEmpty(errors);
    };
  
    // vamos a crear una funcion usando formik
    const formik = useFormik({
      // dentro de formik vamos a definir los valores iniciales de nuestro
      // formulario
      initialValues: {
        name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        address: "",
        city: "",
        date_born: "",
        document_number: "",
        gender: "",
        marital_status: "",
        languages: [],
      },
      // para poder usar validate dentro de formik necesitamos llamar a la funcion
      // validate antes del onSubmit
      // validate que ahora es una funcion de formik por ende el valir default
      // que tendra como parametros son los values
      validate,
      // usen async antes del storeUser 
      onSubmit: async (values) => {
        // Si values.languages
        if (values.languages.length === 0) {
          swal({
            icon: "error",
            title: "Error",
            text: "Debe completar al menos un lenguage",
          });
          return;
        }
        // console.log("values.marital_status", values.marital_status);
        if (values.marital_status === "") {
          swal({
            icon: "error",
            title: "Error",
            text: "Debe completar su estado civil",
          });
          return;
        }
        // aca ustedes deben llamar a la funcion que se
        // encarga de crear al usuario en firebase
        console.log(values);
      },
    });
    return(
        <div className="bg">
            <Container className="Container">
            <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
            <img src={logo} alt=""/>
          
            <h2>Crea una cuenta en Peques</h2>
          
            <TextField
              label="Nombre"
              name="name"
              fullWidth
              error={validateInputsEmpty.name}
              onChange={formik.handleChange}
            />
         
            <TextField
              label="Apellido"
              name="last_name"
              fullWidth
              error={validateInputsEmpty.last_name}
              onChange={formik.handleChange}
            />
         
            <TextField
              label="Correo"
              name="email"
              error={validateInputsEmpty.email}
              type="email"
              fullWidth
              onChange={formik.handleChange}
            />
         
            <TextField
              label="Telefono"
              name="phone_number"
              error={validateInputsEmpty.phone_number}
              type="number"
              onChange={formik.handleChange}
              fullWidth
            />
         
            <TextField
              label="Password"
              name="password"
              error={validateInputsEmpty.password}
              type="password"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          
          <Grid item md={6} xs={12}>
           <img src={signUp} alt=""/>
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              type="submit"
              disabled={buttonDisabled}
              variant="contained"
              fullWidth
              size="large"
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
            </Container>
              {/* como esto es un form tiene un evento llamando onSubmit */}
      
        </div>
    )
}

export default SignUp;