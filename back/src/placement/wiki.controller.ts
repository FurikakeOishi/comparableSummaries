import { Body, Controller, Get, Header, Post, ServiceUnavailableException } from '@nestjs/common';
import { WikiService } from './wiki.service';

@Controller('wiki')
export class WikiController {
    constructor(private readonly wikiService: WikiService) {}

    @Post('wikiSummary')
    @Header('Access-Control-Allow-Origin', '*')
    getWikiSummary(@Body() data): any{
      console.log('wiki summary - inside controller: '+data.article)
      try {
        return this.wikiService.getArticleSummary(data.article) 
      } catch (error) {
        console.log(error)
      }
    }
  
    @Post('wikiPhotos')
    @Header('Access-Control-Allow-Origin', '*')
    getWikiPhotos(@Body() data): any{
      console.log('this is the url inside controller: '+this.wikiService.getMainImagesUrlFromWikiArticle(data.article))
      try {
        return this.wikiService.getMainImagesUrlFromWikiArticle(data.article) 
      } catch (error) {
        console.log(error)
      }
    }

    @Get('generateRandomArticle')
    generateArticles():any{
      try {
        return this.wikiService.generateRandomArticle();
      } catch (error) {
        console.log(error)
      }
      
    }

}
