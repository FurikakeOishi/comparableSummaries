import React, { useState ,useEffect} from "react";
import axios from 'axios';
import './Home.css'
import Typewriter from 'react-ts-typewriter';


//Logos
import wikiLogo from '../../assets/wikilogo.png'
import chatgptLogo from '../../assets/chatgptlogo.png'

//Components
import Comparison from "../Comparison/Comparison";
import Input from "../Input/Input.js";
import Error from "../Error/Error.js";

//ENVIRONMENT
const URL = process.env.REACT_APP_BACKEND_URL;

//TODO
// Merge front and back
// HOST
// Add documentation 
// Clean up code




const Home = () => {
  const [openaiText, setOpenaiText] = useState("");
  const [wikiSummary, setwikiSummary] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [wikiImageURL, setWikiImageURL] = useState("");
  const [showStringDistance, setShowStringDistance] = useState(false);
  const [showErrorDisplay, setShowErrorDisplay] = useState(false);
  const [inputText, setInputText] = useState("")
  const [errorMessage, setError] = useState("")
  const [comparisonDistance, setComparisonDistance]= useState(0)
  
  

  useEffect(() => {
    console.log('The openai summary text has changed:', openaiText);
    if(openaiText!=="") {
        setShowStringDistance(true)
        axios.post(`${URL}/comparison/compareTwoParagraphs`,{firstParagraph: openaiText, secondParagraph: wikiSummary}).then(res=>{
          console.log(res.data);
          setComparisonDistance(res.data*100);
      })
    }
  });
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

   //handle GENERATE button press
   const  postUserPrompt= async (event)=>{
    event.preventDefault()
    //if the texts empty => do nothing
    if (inputText!==''){
      setShowErrorDisplay(false);
      await getData()
      
    }
    
  }

  //handle RANDOM button press
  const handleRandomClick = (e)=>{
    e.preventDefault()
    
    axios.get(`${URL}/wiki/generateRandomArticle`).then( res => {
      console.log('random article: '+res.data)
      setInputText(res.data)
    })
  }


  //handle CLEAR button press
  //Clear data
  const handleClearClick = (e)=>{
    e.preventDefault();
    setInputText("");
    setOpenaiText("");
    setWikiImageURL("");
    setwikiSummary("");
    setImageURL("");
    setShowStringDistance(false);
  }

  const handleCloseErrorClick = ()=>{
    setShowErrorDisplay(false)
  }

  const getData= async () => {
    try {
      axios.post(`${URL}/wiki/wikiSummary`,{article: inputText}).then(res => {
        console.log(res.data)
        setwikiSummary(res.data)
        

        axios.post(`${URL}/openai/generateSummary`,{prompt: inputText}).then(res => {
          // console.log(res.data)
          // setOpenaiText(res.data)
          console.log('res: '+(JSON.stringify(res.data.choices[0].text)))
          setOpenaiText(JSON.stringify(res.data.choices[0].text.replace("\n","")))

          axios.post(`${URL}/wiki/wikiPhotos`,{article: inputText}).then(res => {
            console.log('Wiki image url: '+res.data)
            setWikiImageURL(res.data)
            
            //only if a wiki image exists, generate an openai image 
            if (res.data !== ''){
              axios.post(`${URL}/openai/generateImage`,{prompt: inputText}).then(res => {
                // console.log(res)
                const generatedImageURL= JSON.stringify(res.data.data[0].url)
                console.log('image URL: '+(generatedImageURL.replace(/"/g,"")))
                setImageURL(generatedImageURL.replace(/"/g,""))
              })
            }
          })
        })
      }).catch((err)=>{
        console.log('this is the summary error: '+err.response.data.message)
        setError(err.response.data.message)
        openErrorDialog();
      })
    } catch (error) {
      console.log(error)
    }
  }

  //opens the error dialog for 7 seconds
  const openErrorDialog = ()=>{
    setShowErrorDisplay(true)
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
                {imageURL !== ''? <img src={imageURL} className="generated-image" alt='Waiting for image'/>  : null}
                  <div className="openai-text-prompt-div">
                   {openaiText}
                  </div>
              </div>
              {/* Wikipedia data*/}
              <div className="wikipedia-div">
                <div className="data-title"><img src={wikiLogo} className="logo-image"/><h1 className="wiki-text-title" ><span className="wiki-title">Wikipedia</span> Data</h1></div>
                {wikiImageURL!==''?<img src={wikiImageURL} className="generated-image" alt='Waiting for image'/>:null}
                  <div className="wiki-text-prompt-div">
                  {wikiSummary}
                  </div>
              </div>
            </div>
            {/* generate string similarity after answers from openai and wikipedia APIs */}
            {showStringDistance ? <Comparison openaiParagraph={openaiText} wikiParagraph={wikiSummary} calculatedPercentage={comparisonDistance.toFixed(2).toString()}/> :null}
          </div>
          {showErrorDisplay ? <Error errorMessage={errorMessage} handleCloseErrorClick={handleCloseErrorClick}/> : <div></div>}
        </div>
  );
};

export default Home;