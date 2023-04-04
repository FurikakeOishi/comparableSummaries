import wiki from 'wikijs';
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

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
       return openai.createCompletion({
        model: "text-davinci-002",
        prompt: `summarize this article from wikipedia: ${wikiURL}`,
        temperature:0,
        max_tokens:1000,
      }).then((res)=>{
        console.log(JSON.stringify(res.data.choices[0].text));
        return res.data;
      })
    }
    catch(error){throw error;}
  }

  imageGeneration(wikiURL: string): any{
    try{
      wiki().page(wikiURL.replace(/(?:https?|ftp):\/\/en.wikipedia.org/g,"")).then(page => page.images()).then(console.log)
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
