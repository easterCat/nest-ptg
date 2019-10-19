exports.id = "main";
exports.modules = {

/***/ "./src/collect/collect.entity.ts":
/*!***************************************!*\
  !*** ./src/collect/collect.entity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet Collect = class Collect {\n};\n__decorate([\n    typeorm_1.PrimaryGeneratedColumn(),\n    __metadata(\"design:type\", Number)\n], Collect.prototype, \"id\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 60 }),\n    __metadata(\"design:type\", Number)\n], Collect.prototype, \"createTime\", void 0);\n__decorate([\n    typeorm_1.Column(),\n    __metadata(\"design:type\", Number)\n], Collect.prototype, \"updateTime\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 80 }),\n    __metadata(\"design:type\", String)\n], Collect.prototype, \"collectName\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Collect.prototype, \"description\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Collect.prototype, \"articleIds\", void 0);\n__decorate([\n    typeorm_1.Column(),\n    __metadata(\"design:type\", Number)\n], Collect.prototype, \"articleNum\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 120 }),\n    __metadata(\"design:type\", String)\n], Collect.prototype, \"imagePath\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Collect.prototype, \"tags\", void 0);\nCollect = __decorate([\n    typeorm_1.Entity()\n], Collect);\nexports.Collect = Collect;\n\n\n//# sourceURL=webpack:///./src/collect/collect.entity.ts?");

/***/ }),

/***/ "./src/collect/collect.module.ts":
/*!***************************************!*\
  !*** ./src/collect/collect.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst collect_controller_1 = __webpack_require__(/*! ./collect.controller */ \"./src/collect/collect.controller.ts\");\nconst collect_service_1 = __webpack_require__(/*! ./collect.service */ \"./src/collect/collect.service.ts\");\nconst collect_entity_1 = __webpack_require__(/*! ./collect.entity */ \"./src/collect/collect.entity.ts\");\nlet CollectModule = class CollectModule {\n};\nCollectModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forFeature([collect_entity_1.Collect])],\n        controllers: [collect_controller_1.CollectController],\n        providers: [collect_service_1.CollectService],\n    })\n], CollectModule);\nexports.CollectModule = CollectModule;\n\n\n//# sourceURL=webpack:///./src/collect/collect.module.ts?");

/***/ }),

/***/ "./src/collect/collect.service.ts":
/*!****************************************!*\
  !*** ./src/collect/collect.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst collect_entity_1 = __webpack_require__(/*! ./collect.entity */ \"./src/collect/collect.entity.ts\");\nlet CollectService = class CollectService {\n    constructor(collectRepository) {\n        this.collectRepository = collectRepository;\n    }\n    async create(createData) {\n        return await this.collectRepository.save(createData);\n    }\n    async remove(id) {\n        return await this.collectRepository.delete(id);\n    }\n    async findAll() {\n        return await this.collectRepository.find();\n    }\n    async findById(id) {\n        return await this.collectRepository.findByIds([id]);\n    }\n};\nCollectService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_1.InjectRepository(collect_entity_1.Collect)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], CollectService);\nexports.CollectService = CollectService;\n\n\n//# sourceURL=webpack:///./src/collect/collect.service.ts?");

/***/ })

};