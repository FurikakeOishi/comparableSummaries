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
const wikijs_1 = require("wikijs");
const baseURL = 'https://en.wikipedia.org/wiki/';
let WikiService = class WikiService {
    getMainImagesUrlFromWikiArticle(wikiURL) {
        console.log('inside wiki service: ' + wikiURL);
        const articleTitle = wikiURL.replace(baseURL, "");
        console.log('new wiki title: ' + articleTitle);
        try {
            return (0, wikijs_1.default)().page(articleTitle)
                .then(page => page.mainImage())
                .then((res) => { return res; });
        }
        catch (error) {
            throw error;
        }
    }
    getArticleSummary(wikiURL) {
        const articleTitle = wikiURL.replace(baseURL, "");
        console.log('new wiki title: ' + articleTitle);
        try {
            return (0, wikijs_1.default)().page(articleTitle)
                .then(page => page.summary())
                .then((res) => { return res; });
        }
        catch (error) {
            return error;
        }
    }
};
WikiService = __decorate([
    (0, common_1.Injectable)()
], WikiService);
exports.WikiService = WikiService;
//# sourceMappingURL=wiki.service.js.map