import React from "react";
import '../Error/Error.css'

//close button
import closeButton from '../../assets/closebutton.png'


const Error = (props)=>{

    console.log('ERROR IN PROPS '+props.errorMessage)

    return(
        <div className="main-error-div">
              <h1 className="error-title">{props.errorMessage} </h1>
              <button className="close-button" onClick={props.handleCloseErrorClick}><img src={closeButton} className="close-image"></img></button>
        </div>

    )
}

export default Error;

