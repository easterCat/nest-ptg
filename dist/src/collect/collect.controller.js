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
const common_1 = require("@nestjs/common");
const collect_service_1 = require("./collect.service");
const collect_dto_1 = require("./dto/collect.dto");
let CollectController = class CollectController {
    constructor(collectService) {
        this.collectService = collectService;
    }
    async renderCollect() {
        const allCollects = await this.collectService.findAll();
        return { allCollects };
    }
    renderCreateCollect() {
        return '';
    }
    async createNewCollect(createCollect) {
        const body = Object.assign({}, Object.assign({}, createCollect), {
            createTime: +new Date(),
            updateTime: +new Date(),
            imagePath: '',
            articleIds: '',
            articleNum: 0,
        });
        await this.collectService.create(body);
        return { url: '/collect' };
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('write.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CollectController.prototype, "renderCollect", null);
__decorate([
    common_1.Get('/write'),
    common_1.Render('collectCreate.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CollectController.prototype, "renderCreateCollect", null);
__decorate([
    common_1.Post('/create'),
    common_1.Redirect(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [collect_dto_1.CreateCollectDto]),
    __metadata("design:returntype", Promise)
], CollectController.prototype, "createNewCollect", null);
CollectController = __decorate([
    common_1.Controller('collect'),
    __metadata("design:paramtypes", [collect_service_1.CollectService])
], CollectController);
exports.CollectController = CollectController;
//# sourceMappingURL=collect.controller.js.map