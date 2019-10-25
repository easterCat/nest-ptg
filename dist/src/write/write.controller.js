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
const write_service_1 = require("./write.service");
const fs_extra_1 = require("fs-extra");
const path = require("path");
const STATIC_PATH = path.join(__dirname, `../../static`);
let WriteController = class WriteController {
    constructor(WriteService) {
        this.WriteService = WriteService;
    }
    async root() {
        let result = await this.WriteService.findAll();
        return { title: '我是添加页面', message: '这里是person', result: result };
    }
    async findAll() {
        const result = await this.WriteService.findAll();
        return { title: '文章列表', lists: result };
    }
    async findById(params) {
        const res = await this.WriteService.findById(params.id);
        if (res && res.length > 0) {
            let result = res[0];
            const json = fs_extra_1.readJSONSync(result.SavePath);
            return Object.assign(Object.assign({ title: result.Title }, result), { markdown: json.markdown, html: json.html });
        }
        else {
            return {
                title: '1',
                result: {
                    WriteID: 1,
                    CreateTime: '1',
                    Title: '1',
                    Description: '1',
                    Tags: '1',
                    markdown: '1',
                    html: '1',
                },
            };
        }
    }
    async create(data) {
        const DIR_PATH = path.join(STATIC_PATH, `/articles/${data.collect}`);
        const FILE_PATH = path.join(DIR_PATH, `./${data.Title}.json`);
        fs_extra_1.ensureDirSync(DIR_PATH);
        fs_extra_1.ensureFileSync(FILE_PATH);
        fs_extra_1.writeJsonSync(FILE_PATH, {
            markdown: data.markdown,
            html: data.html,
        });
        const newData = Object.assign(data, {
            SavePath: FILE_PATH,
            CreateTime: Date.now(),
        });
        return this.WriteService.create(newData);
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('write.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WriteController.prototype, "root", null);
__decorate([
    common_1.Get('/all'),
    common_1.Render('articles.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WriteController.prototype, "findAll", null);
__decorate([
    common_1.Get('/:id'),
    common_1.Render('article.hbs'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WriteController.prototype, "findById", null);
__decorate([
    common_1.Post('/create'),
    common_1.Render('write.hbs'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WriteController.prototype, "create", null);
WriteController = __decorate([
    common_1.Controller('write'),
    __metadata("design:paramtypes", [write_service_1.WriteService])
], WriteController);
exports.WriteController = WriteController;
//# sourceMappingURL=write.controller.js.map