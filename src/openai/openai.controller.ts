import { Body, Controller, Header, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';


@Controller('openai')
export class OpenaiController {
    constructor(private readonly openaiService: OpenaiService) {}

    @Post('generateSummary')
    @Header('Access-Control-Allow-Origin', '*')
    generateTextResponse(@Body() data): any{
      console.log('text - inside controller: '+data.prompt)
       return this.openaiService.textPromptGeneration(data.prompt)
    }
  
    @Post('generateImage')
    @Header('Access-Control-Allow-Origin', '*')
    generateImageURL(@Body() data): any{
      console.log('image - inside controller: '+data.prompt)
       return this.openaiService.imageGeneration(data.prompt)
    }
}
