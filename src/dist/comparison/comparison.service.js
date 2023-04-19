"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparisonService = void 0;
const common_1 = require("@nestjs/common");
const stringSimilarity = require("string-similarity");
let ComparisonService = class ComparisonService {
    CompareParagraphs(data) {
        try {
            const distance = stringSimilarity.compareTwoStrings(data.firstParagraph, data.secondParagraph);
            console.log('distance' + distance);
            return distance;
        }
        catch (error) {
            throw error;
        }
    }
};
ComparisonService = __decorate([
    (0, common_1.Injectable)()
], ComparisonService);
exports.ComparisonService = ComparisonService;
//# sourceMappingURL=comparison.service.js.map