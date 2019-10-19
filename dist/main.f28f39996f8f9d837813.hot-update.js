exports.id = "main";
exports.modules = {

/***/ "./src/collect/collect.controller.ts":
/*!*******************************************!*\
  !*** ./src/collect/collect.controller.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst collect_dto_1 = __webpack_require__(/*! ./collect.dto */ \"./src/collect/collect.dto.ts\");\nlet CollectController = class CollectController {\n    findAll() {\n        return { title: '专栏' };\n    }\n    findAll() {\n        return { title: '专栏' };\n    }\n    createNewCollect(createCollect) {\n        console.log('createCollect :', createCollect);\n        return '';\n    }\n};\n__decorate([\n    common_1.Get(),\n    common_1.Render('collect.hbs'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], CollectController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Get('/new'),\n    common_1.Render('collect.hbs'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], CollectController.prototype, \"findAll\", null);\n__decorate([\n    common_1.Post('/create'),\n    common_1.Render('collectCreate.hbs'),\n    __param(0, common_1.Body()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [collect_dto_1.CreateCollectDto]),\n    __metadata(\"design:returntype\", void 0)\n], CollectController.prototype, \"createNewCollect\", null);\nCollectController = __decorate([\n    common_1.Controller('collect')\n], CollectController);\nexports.CollectController = CollectController;\n\n\n//# sourceURL=webpack:///./src/collect/collect.controller.ts?");

/***/ })

};