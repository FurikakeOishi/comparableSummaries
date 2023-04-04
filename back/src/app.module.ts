import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WikiController } from './wiki/wiki/wiki.controller';
import { WikiModule } from './wiki/wiki/wiki.module';
import { WikiService } from './wiki/wiki/wiki.service';
import { OpenaiService } from './openai/openai.service';
import { OpenaiModule } from './openai/openai.module';
import { OpenaiController } from './openai/openai.controller';

@Module({
  imports: [WikiModule, OpenaiModule],
  controllers: [AppController,WikiController, OpenaiController],
  providers: [AppService, WikiService, OpenaiService],
})
export class AppModule {}
