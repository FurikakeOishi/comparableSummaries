import { Injectable } from '@nestjs/common';
import wiki from 'wikijs';

const baseWikipediaURL ='https://en.wikipedia.org/wiki/'

@Injectable()
export class WikiService {

    getMainImagesUrlFromWikiArticle(wikiURL: string): any{
        console.log('inside wiki service: '+wikiURL)
        const articleTitle= this.urlToString(wikiURL)
        console.log('new wiki title: '+articleTitle)
        if(articleTitle === '')
             return 'Empty Article'
        else{
            try{
                 return wiki().page(articleTitle)
                .then(page => page.mainImage())
                .then((res)=>{return res} )
            }
            catch(error){throw error;}
        }   
      }

      getArticleSummary(wikiURL: string): any{
        const articleTitle=this.urlToString(wikiURL)
        console.log('new wiki title: '+articleTitle)
        if(articleTitle === '')
             return 'Empty Article'
        else{
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

      private urlToString(url :string): string{
        if (url ==='')
            return 'Empty URL'
        else
            return  url.replace(baseWikipediaURL,"").replace(/^[a-zA-Z0-9-]$/g,"7").replace("%27","\'");
      }
    
}
