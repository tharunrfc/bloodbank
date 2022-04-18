import React from "react";
import {loggedin} from "./components/Adminlogin.js";
import {Route,Redirect} from "react-router-dom";
import { clicked } from "./components/Bloodbank.js";
import {registered} from "./components/Adminregister"
function Protected({component:Component,...rest}){
    return(
        <Route
            {...rest}
            render={props=>{
                if(loggedin||clicked||registered)
                {
                    return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname:"/",
                            state:{
                                from:props.location
                            }
                        }
                    } />
                }
            }}
        />
    );
}  
export default Protected;