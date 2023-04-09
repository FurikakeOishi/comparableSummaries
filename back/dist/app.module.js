"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const wiki_controller_1 = require("./placement/wiki.controller");
const wiki_module_1 = require("./placement/wiki.module");
const wiki_service_1 = require("./placement/wiki.service");
const openai_service_1 = require("./openai/openai.service");
const openai_module_1 = require("./openai/openai.module");
const openai_controller_1 = require("./openai/openai.controller");
const comparison_module_1 = require("./comparison/comparison.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [wiki_module_1.WikiModule, openai_module_1.OpenaiModule, comparison_module_1.ComparisonModule],
        controllers: [app_controller_1.AppController, wiki_controller_1.WikiController, openai_controller_1.OpenaiController],
        providers: [app_service_1.AppService, wiki_service_1.WikiService, openai_service_1.OpenaiService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map