export declare class WikiService {
    getMainImagesUrlFromWikiArticle(wikiURL: string): any;
    getArticleSummary(wikiURL: string): any;
    generateRandomArticle(): Promise<any>;
    private urlToString;
}
