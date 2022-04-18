import React, { useEffect, useState } from 'react';
import  './Results.css';
import {blood_type} from "./Bloodbank.js";
import hospitalimage from "../Images/hospital.jpg";
import axios from '../axios.js';
function Results() {
    const [hospitals,sethospitals] = useState([]);
    console.log("data set is ")
    console.log(hospitals);
    useEffect(()=>{
        axios.post("/location",{
            location:"India",
            blood_type:blood_type
        },{
            headers:{
                'content_type':'application/json'
            }
        }).then((data)=>{
            sethospitals(data.data);
        }).catch((err)=>{
            sethospitals([]);
            console.log(err);
        })
    },[])
    function handelsubmit(e)
    {
        const location = e.target.value;
        axios.post("/location",{
            location:location,
            blood_type:blood_type
        },{
            headers:{
                'content_type':'application/json'
            }
        }).then((data)=>{
            sethospitals(data.data);

        }).catch((err)=>{
            sethospitals([]);
            console.log(err);
        })
        e.preventDefault();
    }
    return (
        
        <div className="Results">
            <div className="search">
                <form onsubmit={handelsubmit}>
                    <select onChange={handelsubmit} >
                    <option value="India">India</option>
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
                </form>
            </div>
            <div className="container">
            
            {hospitals.length===0? <div className="results_empty">
                <h1>No Hospitals Available</h1>
            </div> : 
                hospitals.map((element)=>{
                   const bloodcount= element[Object.keys(element)[Object.keys(element).length - 1]]
                    return(
                        <div className="resulthospital">
                            <img src={hospitalimage} alt="hospital" />
                            <h1>{element.hospital_name}</h1>
                            <h1>{bloodcount}</h1>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default Results;