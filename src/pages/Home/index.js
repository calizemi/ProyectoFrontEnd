import {Grid} from "@mui/material"
import Header from '../../layouts/Header';
import "./index.css";
import imagen from "../../assets/image1.png"

const Index = () => {
  return (
    <div>
      
      <section className="container">
      <Header/>
      <Grid container alignItems="center" spacing={3}>
        <Grid item md={6} >
          <div className="texto">
          <h1 ><b>GOOD PARENTS</b></h1>
          <span>JUGUETES EDUCATIVOS</span>
          <p>Juguetes ideales para tus hijos, que ayudara en su crecicimento intelectual y emocional</p>
          </div>
         

        </Grid>
        <Grid item md={6}>
          <div className="center">
            <img src={imagen} alt=""/>
          </div>
 
        </Grid>

      </Grid>
        
      </section>
      
      
      </div>
  )
}
export default Index
