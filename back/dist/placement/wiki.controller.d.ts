import { WikiService } from './wiki.service';
export declare class WikiController {
    private readonly wikiService;
    constructor(wikiService: WikiService);
    getWikiSummary(data: any): any;
    getWikiPhotos(data: any): any;
    generateArticles(): any;
}
