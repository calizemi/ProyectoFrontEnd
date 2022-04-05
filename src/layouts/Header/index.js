import { Badge, Grid, TextField, Container} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import filter from "../../assets/filter.svg";
import "./index.css";

const Header = () => {
  return (
    <div>
      <section className="first-container">
        <nav className="nav-ecommerce">
          <Grid container alignItems="flex-end" m={3} height={150} >
            <Grid item md={8}>
              <a href="/">
                <img src={logo} alt="" width="80"/>
              </a>
            <a href="/">
                <img src={filter} alt="" width="40"/>
              </a>
            </Grid>
            <Grid item md={4}>
              <ul className="ul-ecommerce">
                <li>
                  <a href="/">
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="/createaccount">Create Account</a>
                </li>
                <li>
                  <a href="/">Shopping Cart</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </nav>
      </section>

      <Outlet />
    </div>
  );
};
export default Header;
