import React,{useState} from 'react'
import "./Adminlogin.css";
import axios from "../axios";
var loggedin = false;
var hospitalId="";
var hospitalName="";
function Adminlogin(props) {
    const [hospitalcredential,sethospitalCredentials] = useState({
        hospitalId:"",
        hospital_password:""
    });
    function handlechange(e){
        const name = e.target.name;
        const value = e.target.value;
        if(name==="hospitalId")
        {
            sethospitalCredentials((prev)=>{
                return{
                    hospitalId:value,
                    hospital_password:prev.hospital_password,
                }
            })
        }
        else if(name==="password")
        {
            sethospitalCredentials((prev)=>{
                return {
                    hospitalId:prev.hospitalId,
                    hospital_password:value
                }
            })
        }
    }
    function handlesubmit(event)
    {
        axios.post("/hospitallogin",hospitalcredential,{
            headers:{
                'content_type':'application/json'
            }
        }).then((result)=>{
            loggedin=true;
            hospitalId=hospitalcredential.hospitalId;
            hospitalName = result.data.message;
            props.history.push("/hospitals")
        }).catch((err,message)=>{
            console.log(message);
            console.log(err);
            props.history.push("/adminregister");
        })
        event.preventDefault();
    }
    return (
        <div className="Adminlogin">
            <div className="adminlogin_container">
                <div className="adminlogin_heading">
                    <h1>Admin Login</h1>
                </div>
                <div className="adminlogin_details">
                    <form onSubmit={handlesubmit}>
                        <input onChange={handlechange} className="input_field" name="hospitalId" type="text" placeholder="HospitalID" required="true" minLength="10" maxLength="10"/>
                        <input onChange={handlechange} className="input_field"minLength="8" type="Password" name="password" placeholder="password" required="true"/>
                        <input className="btn" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Adminlogin;
export {hospitalName,hospitalId,loggedin};