import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetail";
//import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
    return(
        <Routes>

            <Route path="/login" element = {<Login/>}/>

            <Route path="/" element={
            // <PrivateRoute>            
                 <Home/>    
             //</PrivateRoute>
            }/>
            
            <Route path="/productdetail" element = {
             //<PrivateRoute>
                <ProductDetails/>   
             //</PrivateRoute>
           }/>
        </Routes>
    );
}