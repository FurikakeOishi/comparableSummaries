import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    generateTextResponse(data: any): any;
    generateImageURL(data: any): any;
}
