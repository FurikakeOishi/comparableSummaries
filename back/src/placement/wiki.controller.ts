import { Body, Controller, Header, Post } from '@nestjs/common';
import { WikiService } from './wiki.service';

@Controller('wiki')
export class WikiController {
    constructor(private readonly wikiService: WikiService) {}

    @Post('wikiSummary')
    @Header('Access-Control-Allow-Origin', '*')
    getWikiSummary(@Body() data): any{
      console.log('wiki summary - inside controller: '+data.article)
       return this.wikiService.getArticleSummary(data.article)
    }
  
    @Post('wikiPhotos')
    @Header('Access-Control-Allow-Origin', '*')
    getWikiPhotos(@Body() data): any{
      console.log('this is the url inside controller: '+this.wikiService.getMainImagesUrlFromWikiArticle(data.article))
       return this.wikiService.getMainImagesUrlFromWikiArticle(data.article)
    }

}
