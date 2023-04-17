import { WikiService } from './wiki.service';
import { Response } from 'express';
export declare class WikiController {
    private readonly wikiService;
    constructor(wikiService: WikiService);
    getWikiSummary(data: any, res: Response): Promise<any>;
    getWikiPhotos(data: any): any;
    generateArticles(): any;
}
