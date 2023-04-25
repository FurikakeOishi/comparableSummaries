import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WikiController } from './server/placement/wiki.controller';
import { WikiModule } from './server/placement/wiki.module';
import { WikiService } from './server/placement/wiki.service';
import { OpenaiService } from './server/openai/openai.service';
import { OpenaiModule } from './server/openai/openai.module';
import { OpenaiController } from './server/openai/openai.controller';
import { ComparisonModule } from './server/comparison/comparison.module';

@Module({
  imports: [WikiModule, OpenaiModule, ComparisonModule],
  controllers: [AppController,WikiController, OpenaiController],
  providers: [AppService, WikiService, OpenaiService],
})
export class AppModule {}