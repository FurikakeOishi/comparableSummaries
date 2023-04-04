import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import * as rawbody from 'raw-body';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('generateSummary')
  generateTextResponse(@Body() data): any{
    console.log('text - inside controller: '+data.prompt)
     return this.appService.textPromptGeneration(data.prompt)
  }

  @Post('generateImage')
  generateImageURL(@Body() data): any{
    console.log('image - inside controller: '+data.prompt)
     return this.appService.imageGeneration(data.prompt)
  }
}
