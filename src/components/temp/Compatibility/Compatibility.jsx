import React from 'react';
import imag from  "../../../Images/temp.png";

const Compatibility = () => {
    return (
        <div style={{
            textAlign: 'center',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>Compatibility</h1>
            <img src={imag} alt="asdas" style={{width:"80%", height: "auto"}}></img>
        </div>
    )
}

export default Compatibility;