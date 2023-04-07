import wiki from 'wikijs';
const { Configuration, OpenAIApi } = require("openai");
//require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService {
    
   textPromptGeneration(wikiURL: string): any {
    console.log("prompt we get inside service: "+wikiURL) 
    try{
      return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. essor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32      '
      //  return openai.createCompletion({
      //   model: "text-davinci-002",
      //   prompt: `summarize this article from wikipedia: ${wikiURL}`,
      //   temperature:0,
      //   max_tokens:1000,
      // }).then((res)=>{
      //   console.log(JSON.stringify(res.data.choices[0].text));
      //   return res.data;
      // })
    }
    catch(error){throw error;}
  }

  imageGeneration(wikiURL: string): any{
    try{
      return wikiURL;
      //wiki().page(wikiURL.replace(/(?:https?|ftp):\/\/en.wikipedia.org/g,"")).then(page => page.images()).then(console.log)
    //   return openai.createImage({
    //    n:1,
    //    prompt: `create an image based off of this article: ${wikiURL}`,
    //    size: "256x256",
    //  }).then((res)=>{
    //    console.log("this is the generated image's URL"+JSON.stringify(res.data.data[0].url));
    //    return res.data;
    //  })
   }
   catch(error){throw error;}
  }

}
