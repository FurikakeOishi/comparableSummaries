"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WikiService = void 0;
const common_1 = require("@nestjs/common");
const urlencode = require('urlencode');
const wikijs_1 = require("wikijs");
const baseWikipediaURL = 'https://en.wikipedia.org/wiki/';
let WikiService = class WikiService {
    getMainImagesUrlFromWikiArticle(wikiURL) {
        if (wikiURL === '')
            return 'Empty Article';
        else {
            console.log('inside wiki service: ' + wikiURL);
            const articleTitle = this.urlToString(wikiURL);
            console.log('new wiki title: ' + articleTitle);
            return (0, wikijs_1.default)().page(articleTitle)
                .then(page => page.mainImage())
                .then((res) => { return res; });
        }
    }
    getArticleSummary(wikiURL) {
        if (wikiURL === '')
            return 'Empty Article';
        else {
            const articleTitle = this.urlToString(wikiURL);
            console.log('new wiki title: ' + articleTitle);
            return (0, wikijs_1.default)().page(articleTitle)
                .then(page => page.summary())
                .then((res) => { return res; });
        }
    }
    async generateRandomArticle() {
        const results = await (0, wikijs_1.default)().random(1);
        const urlArray = await Promise.all(results.map(async (result) => {
            const page = await (0, wikijs_1.default)().page(result);
            const url = page.url();
            return url;
        }));
        return urlArray;
    }
    urlToString(url) {
        if (url === '')
            return 'Empty URL';
        else {
            return urlencode.decode(url, 'utf8').replace(baseWikipediaURL, "").replace("_", " ");
        }
    }
};
WikiService = __decorate([
    (0, common_1.Injectable)()
], WikiService);
exports.WikiService = WikiService;
//# sourceMappingURL=wiki.service.js.map