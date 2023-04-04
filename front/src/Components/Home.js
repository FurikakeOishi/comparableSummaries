import React, { useState } from "react";
import axios from 'axios';
import './Home.css'


const URL = process.env.REACT_APP_BACKEND_URL;



const InputOutput = () => {
  const [inputText, setInputText] = useState("");
  const [answer, setAnswer] = useState("OpenAI Output");
  const [imageURL, setImageURL] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  //handle button press
  const postUserPrompt=()=>{
    console.log("input text before post: "+ inputText)
    axios.post(`${URL}/generateSummary`,{prompt: inputText}).then(res => {
      //console.log('res: '+(JSON.stringify(res.data.choices[0].text)))
      setAnswer(JSON.stringify(res.data.choices[0].text))
    })
    axios.post(`${URL}/generateImage`,{prompt: inputText}).then(res => {
      const generatedImageURL= JSON.stringify(res.data.data[0].url)
      //console.log('image URL: '+(generatedImageURL.replace(/"/g,"")))
      setImageURL(generatedImageURL.replace(/"/g,""))
    })
  }

  return (
        <div className="main-div">
          <div className="input-div">
            <input className="input-field"/>
            <h4 className="tiny-helper-title">Paste a URL from Wikipedia.com !</h4>
            <button className="generate-button" type="text"  onClick={postUserPrompt}>Generate</button>
          </div>
          <div className="generated-area">
            <div className="openai-div">
              <div className="openai-text-prompt-div">
              {answer}
              </div>
              <img src={imageURL} class="generated-image" alt='Waiting for image'/>
            </div>
            <div className="wikipedia-div">
              <div className="wiki-text-prompt-div">
              {answer}
              </div>
              <img src={imageURL} class="generated-image" alt='Waiting for image'/>
            </div>
          </div>
        </div>
  );
};

export default InputOutput;