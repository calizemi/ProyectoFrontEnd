import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
const Router=()=>{
    return(
        <BrowserRouter>
          <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
              <Route element={<Header/>}>
                  
              </Route>
          </Routes>
        </BrowserRouter>
    )
}
export default Router