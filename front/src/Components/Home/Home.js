import React, { useState ,useEffect} from "react";
import axios from 'axios';
import './Home.css'
import Typewriter from 'react-ts-typewriter';
//require('dotenv').config()

//Logos
import wikiLogo from '../../assets/wikilogo.png'
import chatgptLogo from '../../assets/chatgptlogo.png'
import Comparison from "../Comparison/Comparison";
import Input from "../Input/Input.js";

const URL = process.env.REACT_APP_BACKEND_URL;
console.log(URL)



const Home = () => {
  const [openaiText, setOpenaiText] = useState("OpenAI Output");
  const [wikiSummary, setwikiSummary] = useState("Wiki Output");
  const [imageURL, setImageURL] = useState("");
  const [wikiImageURL, setWikiImageURL] = useState("");
  const [showStringDistance, setShowStringDistance] = useState(false);
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    console.log('The openai summary text has changed:', openaiText);
    if(openaiText!=="OpenAI Output") 
      setShowStringDistance(true)
  });
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRandomClick = (e)=>{
    e.preventDefault()
    
    axios.get(`${URL}/wiki/generateRandomArticle`).then( res => {
      console.log('random article: '+res.data)
      setInputText(res.data)
    })
  }

  const handleClearClick = (e)=>{
    e.preventDefault();
    setInputText("");
    setOpenaiText("");
    setWikiImageURL("");
    setwikiSummary("");
    setImageURL("");
    setShowStringDistance(false);
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

  const wikiData=() => {
    axios.post(`${URL}/wiki/wikiSummary`,{article: inputText}).then(res => {
      console.log(res.data)
      setwikiSummary(res.data)
      //console.log('res: '+(JSON.stringify(res.data.choices[0].text)))
      //setOpenaiText(JSON.stringify(res.data.choices[0].text))
    }).catch((err)=>{
      console.log(err)
    })
    axios.post(`${URL}/wiki/wikiPhotos`,{article: inputText}).then(res => {
      console.log('Wiki image url: '+res.data)
      setWikiImageURL(res.data)
      //const generatedImageURL= JSON.stringify(res.data.data[0].url)
      //console.log('image URL: '+(generatedImageURL.replace(/"/g,"")))
      //setImageURL(generatedImageURL.replace(/"/g,""))
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  //handle button press
  const  postUserPrompt= async (event)=>{
    event.preventDefault()
    //OPENAI ANSWERS
    console.log("input text before post: "+ inputText)
    wikiData()
    openaiAnswers()

  }


  return (
        <div>
          <div className="background-div"></div>
          <div className="main-div">
            <Input postUserPrompt={postUserPrompt} value={inputText} handleInputChange={handleInputChange} handleClearClick={handleClearClick} handleRandomClick={handleRandomClick}/>
            <div className="generated-area">
              {/* OPENAI outputs */}
              <div className="openai-div">
                <div className="data-title"><img src={chatgptLogo} className="logo-image"/><h1 className="openai-text-title"><span className="openai-title">OpenAI</span> Output</h1></div>
                {imageURL !== ''? <img src={imageURL} className="generated-image" alt='Waiting for image'/>  : <div></div>}
                  <div className="openai-text-prompt-div">
                    <Typewriter text={openaiText} speed={1} />
                  </div>
              </div>
              {/* Wikipedia data*/}
              <div className="wikipedia-div">
                <div className="data-title"><img src={wikiLogo} className="logo-image"/><h1 className="wiki-text-title" ><span className="wiki-title">Wikipedia</span> Data</h1></div>
                {wikiImageURL!==''?<img src={wikiImageURL} className="generated-image" alt='Waiting for image'/>:<div></div>}
                  <div className="wiki-text-prompt-div">
                  {wikiSummary}
                  </div>
              </div>
            </div>
            {/* generate string similarity after answers from openai and wikipedia APIs */}
            {showStringDistance ? <Comparison openaiParagraph={openaiText} wikiParagraph={wikiSummary}/> : <div></div>}
          </div>
        </div>
  );
};

export default Home;