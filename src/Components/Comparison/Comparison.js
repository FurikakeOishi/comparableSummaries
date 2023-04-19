import React,{useState} from "react";

//styling
import '../Comparison/Comparison.css'


//github logos
import githubName from '../../assets/GitHub_Logo.png'
import githubLogo from '../../assets/github-mark.png'

const Comparison = (props) => {
  
  return (
        <div className="comparison-div">
          <h1 className="explanation">Using an algorithm based on Dice's coefficient, the similarity between the 2 paragraphs is:<br/> <br/><span className="percentage">{props.calculatedPercentage}%</span> </h1>
          <br/> <br/><br/> <br/><br/> 
          <div className="plug-div"><h1 className="github-plug"> Read more about it on: <a className="link" href="https://github.com/FurikakeOishi/comparableSummaries"  target="_blank"><img src={githubLogo} className="github-logo"></img><img src={githubName} className="github-logo"></img></a></h1></div>
        </div>
  );
};

export default Comparison;