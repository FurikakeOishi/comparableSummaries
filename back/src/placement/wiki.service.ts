import { Injectable } from '@nestjs/common';
import wiki from 'wikijs';

const baseURL ='https://en.wikipedia.org/wiki/'

@Injectable()
export class WikiService {

    getMainImagesUrlFromWikiArticle(wikiURL: string): any{
        console.log('inside wiki service: '+wikiURL)
        const articleTitle=wikiURL.replace(baseURL,"")
        console.log('new wiki title: '+articleTitle)
        try{
            return wiki().page(articleTitle)
            .then(page => page.mainImage())
            .then((res)=>{return res} )
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

      getArticleSummary(wikiURL: string): any{
        const articleTitle=wikiURL.replace(baseURL,"")
        console.log('new wiki title: '+articleTitle)
        try{
            return wiki().page(articleTitle)
            .then(page => page.summary())
            .then((res)=>{return res})
        }
        catch(error){
            return error;
        }
        
      }
    
}
