export declare class WikiService {
    getMainImagesUrlFromWikiArticle(wikiURL: string): any;
    getArticleSummary(wikiURL: string): any;
    generateRandomArticle(): Promise<string[]>;
    private urlToString;
}
