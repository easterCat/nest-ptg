exports.id = "main";
exports.modules = {

/***/ "./src/write/write.controller.ts":
/*!***************************************!*\
  !*** ./src/write/write.controller.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst write_service_1 = __webpack_require__(/*! ./write.service */ \"./src/write/write.service.ts\");\nconst fs_extra_1 = __webpack_require__(/*! fs-extra */ \"fs-extra\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst STATIC_PATH = path.join(__dirname, `../../static`);\nlet WriteController = class WriteController {\n    constructor(WriteService) {\n        this.WriteService = WriteService;\n    }\n    async root() {\n        let result = await this.WriteService.findAll();\n        return { title: '我是添加页面', message: '这里是person', result: result };\n    }\n    async findAll() {\n        const result = await this.WriteService.findAll();\n        return { title: '文章列表', lists: result };\n    }\n    async findById(params) {\n        const result = await this.WriteService.findById(params.id);\n        if (result && result.length > 0) {\n            fs_extra_1.readJSONSync(result[0].SavePath);\n        }\n        else {\n            return {\n                result: {\n                    WriteID: 1,\n                    CreateTime: '1',\n                    Title: '1',\n                    Description: '1',\n                    Tags: '1',\n                },\n            };\n        }\n    }\n    async create(data) {\n        const DIR_PATH = path.join(STATIC_PATH, `/articles/${data.collect}`);\n        const FILE_PATH = path.join(DIR_PATH, `./${data.Title}.json`);\n        fs_extra_1.ensureDirSync(DIR_PATH);\n        fs_extra_1.ensureFileSync(FILE_PATH);\n        fs_extra_1.writeJsonSync(FILE_PATH, {\n            markdown: data.markdown,\n        });\n        const newData = Object.assign(data, {\n            SavePath: FILE_PATH,\n            CreateTime: Date.now(),\n        });\n        return this.WriteService.create(newData);\n    }\n};\n__decorate([\n    common_1.Get(),\n    common_1.Render('write.hbs'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], WriteController.prototype, \"root\", null);\n__decorate([\n    common_1.Get('/all'),\n    common_1.Render('articles.hbs'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], WriteController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Get('/:id'),\n    common_1.Render('article.hbs'),\n    __param(0, common_1.Param()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], WriteController.prototype, \"findById\", null);\n__decorate([\n    common_1.Post('/create'),\n    common_1.Render('write.hbs'),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Promise)\n], WriteController.prototype, \"create\", null);\nWriteController = __decorate([\n    common_1.Controller('write'),\n    __metadata(\"design:paramtypes\", [write_service_1.WriteService])\n], WriteController);\nexports.WriteController = WriteController;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/write/write.controller.ts?");

/***/ })

};