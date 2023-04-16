import React,{useState} from "react";





const Comparison = ({openaiParagraph, wikiParagraph}) => {

  const [paragraphsDistance, setParagraphsDistance] = useState(0);

  
  return (
        <div>
          <h1>Using an algorithm based on Dice's coefficient, the similarity between the string in both paragrams is <span className="percentage"></span> </h1>
          
        </div>
  );
};

export default Comparison;