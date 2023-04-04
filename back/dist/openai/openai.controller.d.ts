import { OpenaiService } from './openai.service';
export declare class OpenaiController {
    private readonly openaiService;
    constructor(openaiService: OpenaiService);
    generateTextResponse(data: any): any;
    generateImageURL(data: any): any;
}
