import axios from '../axios';
import React,{useState} from 'react';
import { hospitalname,} from './Adminregister';
import {hospitalName,} from "./Adminlogin.js";
import "./Hospitaldetails.css";
function Hospitalsdetails(props) {

    const [details,setDetails] = useState({
        Opos:0,
        Oneg:0,
        ABpos:0,
        ABneg:0,
        Apos:0,
        Aneg:0,
        Bpos:0,
        Bneg:0
    });
    function handlechange(event)
    {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case "o+":
                setDetails((prev)=>{
                    return{
                        
                        Opos:value,
                        Oneg:prev.Oneg,
                        ABpos:prev.ABpos,
                        ABneg:prev.ABneg,
                        Apos:prev.Apos,
                        Aneg:prev.Aneg,
                        Bpos:prev.Bpos,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "o-":
                setDetails((prev)=>{
                    return{
                        
                        Opos:prev.Opos,
                        Oneg:value,
                        ABpos:prev.ABpos,
                        ABneg:prev.ABneg,
                        Apos:prev.Apos,
                        Aneg:prev.Aneg,
                        Bpos:prev.Bpos,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "AB+":
                setDetails((prev)=>{
                    return{
                        
                        Opos:prev.Opos,
                        Oneg:prev.Oneg,
                        ABpos:value,
                        ABneg:prev.ABneg,
                        Apos:prev.Apos,
                        Aneg:prev.Aneg,
                        Bpos:prev.Bpos,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "AB-":
                setDetails((prev)=>{
                    return{
                        
                        Opos:prev.Opos,
                        Oneg:prev.Oneg,
                        ABpos:prev.ABpos,
                        ABneg:value,
                        Apos:prev.Apos,
                        Aneg:prev.Aneg,
                        Bpos:prev.Bpos,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "A+":
                setDetails((prev)=>{
                    return{
                        
                        Opos:prev.Opos,
                        Oneg:prev.Oneg,
                        ABpos:prev.ABpos,
                        ABneg:prev.ABneg,
                        Apos:value,
                        Aneg:prev.Aneg,
                        Bpos:prev.Bpos,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "A-":
                setDetails((prev)=>{
                    return{
                        
                        Opos:prev.Opos,
                        Oneg:prev.Oneg,
                        ABpos:prev.ABpos,
                        ABneg:prev.ABneg,
                        Apos:prev.Apos,
                        Aneg:value,
                        Bpos:prev.Bpos,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "B+":
                setDetails((prev)=>{
                    return{
                        
                        Opos:prev.Opos,
                        Oneg:prev.Oneg,
                        ABpos:prev.ABpos,
                        ABneg:prev.ABneg,
                        Apos:prev.Apos,
                        Aneg:prev.Aneg,
                        Bpos:value,
                        Bneg:prev.Bneg
                    }
                })
                break;
            case "B-":
                setDetails((prev)=>{
                    return{
                       
                        Opos:prev.Opos,
                        Oneg:prev.Oneg,
                        ABpos:prev.ABpos,
                        ABneg:prev.ABneg,
                        Apos:prev.Apos,
                        Aneg:prev.Aneg,
                        Bpos:prev.Bpos,
                        Bneg:value
                    }
                })
                break;
            default:
                console.log("slect something");
                break;
        }
    }
    function handlesubmit(e){
        e.preventDefault();
        axios.post("/bloodtypes",details,{
            headers:{
                'content_type':'application/json'
            }
        }).then((data)=>{
            console.log("succesffully added");
            props.history.push("/bloodbank")
        }).catch((err)=>{
            console.log("the error is ");
            console.log(err);
            props.history.push("/hospitals")
        })
        console.log(details);
        
    }
    return (
        <div className="Hospital_details">
        <h1 className="hospital_details_heading">welcome {hospitalname===""?hospitalName:hospitalname}</h1>
            <div className="hospital_details_container">
                <form onSubmit={handlesubmit}>
                    <div className="hospital_details_bloodtype O">
                        <label htmlFor="O+">O+</label>
                        <input onChange={handlechange} name="o+" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype O">
                        <label  htmlFor="O-">O-</label>
                        <input onChange={handlechange} name="o-" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype AB">
                        <label  htmlFor="AB+">AB+</label>
                        <input onChange={handlechange} name="AB+" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype AB">
                        <label htmlFor="AB-">AB-</label>
                        <input onChange={handlechange} name="AB-" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype A">
                        <label className="A" htmlFor="A+">A+</label>
                        <input onChange={handlechange} name="A+" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype A">
                        <label htmlFor="A-">A-</label>
                        <input onChange={handlechange} name="A-" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype B">
                        <label  htmlFor="B+">B+</label>
                        <input onChange={handlechange} name="B+" type="number" min="0" required="true"/>
                    </div>
                    <div className="hospital_details_bloodtype B">
                        <label htmlFor="B-">B-</label>
                        <input onChange={handlechange} name="B-" type="number" min="0" required="true"/>
                    </div>
                    <button className="subbtn" placeholder="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Hospitalsdetails;