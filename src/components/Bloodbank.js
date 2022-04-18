import React from 'react'
import "./Bloodbank.css";
import axios from "../axios.js";
var blood_type = "";
var clicked=false;
function Bloodbank(props) {
    function handlesubmit(e)
    {
        const bloodt = e.target.name;
        axios.post("/gethospitals",{bloodtype:bloodt},{
            headers:{
                'content_type':'application/json'
            }
        }).then((data)=>{
            clicked=true;
            blood_type = bloodt;
            props.history.push("/Results");
        }).catch((err)=>{
            console.log(err);
        })

    }
    return (
        <div className="bloodbank">
           <div className="bloodtype_container">
                <div className="blood_f">
                    <button name="abpos" onClick={handlesubmit} className="bloodtype ab+">
                        AB+
                    </button>
                    <button name="abneg" onClick={handlesubmit} className="bloodtype ab-">
                        AB-
                    </button>
                    <button name="apos" onClick={handlesubmit} className="bloodtype a+">
                        A+
                    </button>
                    <button name="aneg" onClick={handlesubmit} className="bloodtype a-">
                       A-
                    </button>
                </div>
                <div className="blood_s">
                    <button name="bpos" onClick={handlesubmit} className="bloodtype b+">
                        B+
                    </button>
                    <button name="bneg" onClick={handlesubmit} className="bloodtype b-">
                        B-
                    </button>
                    <button name="opos" onClick={handlesubmit} className="bloodtype o+">
                       O+
                    </button>
                    <button name="oneg" onClick={handlesubmit} className="bloodtype o-">
                        O-
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Bloodbank;
export {blood_type,clicked};