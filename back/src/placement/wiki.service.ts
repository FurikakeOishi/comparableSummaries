import { Injectable } from '@nestjs/common';
const urlencode = require('urlencode');
import wiki from 'wikijs';

const baseWikipediaURL ='https://en.wikipedia.org/wiki/'

@Injectable()
export class WikiService {

    getMainImagesUrlFromWikiArticle(wikiURL: string): any{
        if(wikiURL === '')
             return 'Empty Article'
        else{
            console.log('inside wiki service: '+wikiURL)
            const articleTitle= this.urlToString(wikiURL)
            console.log('new wiki title: '+articleTitle)
                return wiki().page(articleTitle)
            .then(page => page.mainImage())
            .then((res)=>{return res} )
        }   
      }

    getArticleSummary(wikiURL: string): any{
        if(wikiURL === '')
             return 'Empty Article'
        else{
            const articleTitle=this.urlToString(wikiURL)
            console.log('new wiki title: '+articleTitle)
            return wiki().page(articleTitle)
            .then(page => page.summary())
            .then((res)=>{return res})
        }
    }
    

    //can get multiple results as well
    async generateRandomArticle(){
        const results = await wiki().random(1);
        const urlArray= await Promise.all(results.map(async (result)=>{
            const page = await wiki().page(result);
            const url =  page.url();
            return url;
        }))
        return urlArray;
    }
    
    private urlToString(url :string): string{
        if (url ==='')
            return 'Empty URL'
        else{
            return  urlencode.decode(url,'utf8').replace(baseWikipediaURL,"").replace("_"," ")
       }
    }
    
}
