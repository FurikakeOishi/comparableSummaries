import React from "react";
import '../Input/Input.css'


const Input = (props)=>{


    return(
        <div className="input-div">
              <form onSubmit={props.postUserPrompt}>
                <textarea className="input-field" value={props.value} type="text" onChange={props.handleInputChange}/>
                <h4 className="tiny-helper-title">Paste a URL from Wikipedia.com !</h4>
                <div className="buttons">
                    <button className="generate-button" type="submit" >Generate</button>
                    <button className="random-button" onClick={props.handleRandomClick} >Random</button>
                    <button className="clear-button" onClick={props.handleClearClick} >Clear</button>
                </div>
              </form>
        </div>

    )
}

export default Input;

