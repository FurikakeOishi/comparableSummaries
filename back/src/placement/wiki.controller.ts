import { Body, Controller, Get, Header, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { WikiService } from './wiki.service';
import { Response } from 'express';


@Controller('wiki')
export class WikiController {
    constructor(private readonly wikiService: WikiService) {}

    @Post('wikiSummary')
    @Header('Access-Control-Allow-Origin', '*')
    async getWikiSummary(@Body() data, @Res({passthrough: true}) res: Response): Promise<any>{
      const answer = await  this.wikiService.getArticleSummary(data.article) ;
      if (answer==='error')
        throw new HttpException('Article Doesn\'t exist, please try another',400)
      return answer
    }
  
    @Post('wikiPhotos')
    @Header('Access-Control-Allow-Origin', '*')
     getWikiPhotos(@Body() data): any{
      return this.wikiService.getMainImagesUrlFromWikiArticle(data.article)

    }


    @Get('generateRandomArticle')
    generateArticles():any{
      try {
        return this.wikiService.generateRandomArticle();
      } catch (error) {
        //console.log('this is the ERRROR: '+error)
      }
      
    }

}
