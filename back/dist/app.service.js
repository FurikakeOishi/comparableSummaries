"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const wikijs_1 = require("wikijs");
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    textPromptGeneration(wikiURL) {
        console.log("prompt we get inside service: " + wikiURL);
        try {
            return openai.createCompletion({
                model: "text-davinci-002",
                prompt: `summarize this article from wikipedia: ${wikiURL}`,
                temperature: 0,
                max_tokens: 1000,
            }).then((res) => {
                console.log(JSON.stringify(res.data.choices[0].text));
                return res.data;
            });
        }
        catch (error) {
            throw error;
        }
    }
    imageGeneration(wikiURL) {
        try {
            (0, wikijs_1.default)().page(wikiURL.replace(/(?:https?|ftp):\/\/en.wikipedia.org/g, "")).then(page => page.images()).then(console.log);
        }
        catch (error) {
            throw error;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map