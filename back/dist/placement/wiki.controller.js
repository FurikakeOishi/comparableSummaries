"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WikiController = void 0;
const common_1 = require("@nestjs/common");
const wiki_service_1 = require("./wiki.service");
let WikiController = class WikiController {
    constructor(wikiService) {
        this.wikiService = wikiService;
    }
    getWikiSummary(data) {
        console.log('wiki summary - inside controller: ' + data.article);
        return this.wikiService.getArticleSummary(data.article);
    }
    getWikiPhotos(data) {
        console.log('this is the url inside controller: ' + this.wikiService.getMainImagesUrlFromWikiArticle(data.article));
        return this.wikiService.getMainImagesUrlFromWikiArticle(data.article);
    }
};
__decorate([
    (0, common_1.Post)('wikiSummary'),
    (0, common_1.Header)('Access-Control-Allow-Origin', '*'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], WikiController.prototype, "getWikiSummary", null);
__decorate([
    (0, common_1.Post)('wikiPhotos'),
    (0, common_1.Header)('Access-Control-Allow-Origin', '*'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], WikiController.prototype, "getWikiPhotos", null);
WikiController = __decorate([
    (0, common_1.Controller)('wiki'),
    __metadata("design:paramtypes", [wiki_service_1.WikiService])
], WikiController);
exports.WikiController = WikiController;
//# sourceMappingURL=wiki.controller.js.map