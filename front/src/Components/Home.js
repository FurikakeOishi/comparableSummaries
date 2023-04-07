import React, { useState } from "react";
import axios from 'axios';
import './Home.css'
//require('dotenv').config()


const URL = process.env.REACT_APP_BACKEND_URL;
console.log(URL)



const InputOutput = () => {
  const [inputText, setInputText] = useState("");
  const [openaiText, setOpenaiText] = useState("OpenAI Output");
  const [wikiSummary, setwikiSummary] = useState("Wiki Output");
  const [imageURL, setImageURL] = useState("");
  const [wikiImageURL, setWikiImageURL] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  //handle button press
  const postUserPrompt=(event)=>{
    event.preventDefault()
    //OPENAI ANSWERS
    console.log("input text before post: "+ inputText)
    openaiAnswers();
    wikiData();
  }

  const openaiAnswers=()=>{
    axios.post(`${URL}/openai/generateSummary`,{prompt: inputText}).then(res => {
      console.log(res.data)
      setOpenaiText(res.data)
      //console.log('res: '+(JSON.stringify(res.data.choices[0].text)))
      //setOpenaiText(JSON.stringify(res.data.choices[0].text))
    })
    axios.post(`${URL}/openai/generateImage`,{prompt: inputText}).then(res => {
      console.log(res)
      //const generatedImageURL= JSON.stringify(res.data.data[0].url)
      //console.log('image URL: '+(generatedImageURL.replace(/"/g,"")))
      //setImageURL(generatedImageURL.replace(/"/g,""))
    })
  }

  const wikiData=()=>{
    axios.post(`${URL}/wiki/wikiSummary`,{article: inputText}).then(res => {
      console.log(res.data)
      setwikiSummary(res.data)
      //console.log('res: '+(JSON.stringify(res.data.choices[0].text)))
      //setOpenaiText(JSON.stringify(res.data.choices[0].text))
    })
    axios.post(`${URL}/wiki/wikiPhotos`,{article: inputText}).then(res => {
      console.log('Wiki image url: '+res.data)
      setWikiImageURL(res.data)
      //const generatedImageURL= JSON.stringify(res.data.data[0].url)
      //console.log('image URL: '+(generatedImageURL.replace(/"/g,"")))
      //setImageURL(generatedImageURL.replace(/"/g,""))
    })
  }

  return (
        <div className="main-div">
          <div className="input-div">
            <form onSubmit={postUserPrompt}>
              <input className="input-field" type="text" onChange={handleInputChange}/>
              <h4 className="tiny-helper-title">Paste a URL from Wikipedia.com !</h4>
              <button className="generate-button" type="submit" >Generate</button>
            </form>
          </div>
          <div className="generated-area">
            <div className="openai-div">
              <div className="openai-text-prompt-div">
              {openaiText}
              </div>
              <img src={imageURL} className="generated-image" alt='Waiting for image'/>
            </div>
            <div className="wikipedia-div">
              <div className="wiki-text-prompt-div">
              {wikiSummary}
              </div>
              <img src={wikiImageURL} className="generated-image" alt='Waiting for image'/>
            </div>
          </div>
        </div>
  );
};

export default InputOutput;