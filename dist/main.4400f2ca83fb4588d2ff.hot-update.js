exports.id = "main";
exports.modules = {

/***/ "./src/write/write.entity.ts":
/*!***********************************!*\
  !*** ./src/write/write.entity.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet Write = class Write {\n};\n__decorate([\n    typeorm_1.PrimaryGeneratedColumn(),\n    __metadata(\"design:type\", Number)\n], Write.prototype, \"WriteID\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"WriteContent\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"WriteTitle\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"WriteDescription\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"WritePath\", void 0);\nWrite = __decorate([\n    typeorm_1.Entity()\n], Write);\nexports.Write = Write;\n\n\n//# sourceURL=webpack:///./src/write/write.entity.ts?");

/***/ }),

/***/ "./src/write/write.module.ts":
/*!***********************************!*\
  !*** ./src/write/write.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst write_controller_1 = __webpack_require__(/*! ./write.controller */ \"./src/write/write.controller.ts\");\nconst write_service_1 = __webpack_require__(/*! ./write.service */ \"./src/write/write.service.ts\");\nconst write_entity_1 = __webpack_require__(/*! ./write.entity */ \"./src/write/write.entity.ts\");\nlet WriteModule = class WriteModule {\n};\nWriteModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forFeature([write_entity_1.Write])],\n        controllers: [write_controller_1.WriteController],\n        providers: [write_service_1.WriteService],\n    })\n], WriteModule);\nexports.WriteModule = WriteModule;\n\n\n//# sourceURL=webpack:///./src/write/write.module.ts?");

/***/ })

};