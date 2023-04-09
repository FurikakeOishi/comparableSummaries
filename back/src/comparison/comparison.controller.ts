import { Controller, Post, Body, Header } from '@nestjs/common';
import { ComparisonService } from './comparison.service';

@Controller('comparison')
export class ComparisonController {
    constructor(private readonly comparisonService: ComparisonService) {}

    @Post('compareTwoParagraphs')
    @Header('Access-Control-Allow-Origin', '*')
    generateImageURL(@Body() data): any{
       return this.comparisonService.CompareParagraphs(data)
    }
}
