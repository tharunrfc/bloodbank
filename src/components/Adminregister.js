import React,{useState} from 'react';
import "./Adminlogin.css";
import "./Adminregister.css"
import axios from '../axios.js';
var hospitalname="";
var hospitalid="";
var registered=false;
function Adminregister(props) {
    const [hcred,setHcred] = useState({
        hname:"",
        hid:"",
        hpasscode:"",
        location:"",
    });
    function handlechange(e){
        const name = e.target.name;
        const value =e.target.value;
        if(name==="hname")
        {
            setHcred((prev)=>{
                return{
                    hname:value,
                    hid:prev.hid,
                    hpasscode:prev.passcode,
                    location:prev.location
                }
            });
        }
        else if(name==="hid"){
            setHcred((prev)=>{
                return{
                    hname:prev.hname,
                    hid:value,
                    hpasscode:prev.passcode,
                    location:prev.location
                }
            });
        }
        else if(name==="hpassword"){
            setHcred((prev)=>{
                return{
                    hname:prev.hname,
                    hid:prev.hid,
                    hpasscode:value,
                    location:prev.location
                }
            });
        }
        else {
            setHcred((prev)=>{
                return{
                    hname:prev.hname,
                    hid:prev.hid,
                    hpasscode:prev.hpasscode,
                    location:value
                }
            })
        }
    }
    function handlesubmit(e){
        e.preventDefault();
        if(hcred.location==="")
        {
            alert("please select your location");
        }
        else{
            axios.post("/hospitalregister",hcred,{
                headers:{
                    'content_type':'application/json',
                }
            }).then(()=>{
                hospitalname=hcred.hname;
                hospitalid=hcred.hid;
                registered=true;
                props.history.push("/hospitals")
            }).catch((err,message)=>{
                console.log(message);
                props.history.push("/adminlogin")
            });
        }
    }
    return (
        <div className="Adminlogin">
        <div className="adminlogin_container regsp">
            <div className="adminlogin_heading">
                <h1>Admin Register</h1>
            </div>
            <div className="adminlogin_details">
                <form onSubmit={handlesubmit}>
                    <input onChange={handlechange} name="hname" className="input_field" type="text" placeholder="Hospitalname" required="true"/>
                    <input onChange={handlechange} name="hid" className="input_field" type="text" minLength="10" maxLength="10" placeholder="HospitalID" required="true"/>
                    <input onChange={handlechange} name="hpassword" minLength="8" type="password" className="input_field" placeholder="password" required="true"/>
                    <select className="adminreg_location" onChange={handlechange}>
                    <option value="">Location</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </select>
                    <input className="btn" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Adminregister;
export {hospitalname,hospitalid,registered};