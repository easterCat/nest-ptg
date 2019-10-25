exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst person_module_1 = __webpack_require__(/*! ./person/person.module */ \"./src/person/person.module.ts\");\nconst write_module_1 = __webpack_require__(/*! ./write/write.module */ \"./src/write/write.module.ts\");\nconst collect_module_1 = __webpack_require__(/*! ./collect/collect.module */ \"./src/collect/collect.module.ts\");\nlet AppModule = class AppModule {\n    constructor(connection) {\n        this.connection = connection;\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forRoot(), person_module_1.PersonModule, write_module_1.WriteModule, collect_module_1.CollectModule],\n        controllers: [app_controller_1.AppController],\n        providers: [app_service_1.AppService],\n    }),\n    __metadata(\"design:paramtypes\", [typeorm_2.Connection])\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/collect/collect.controller.ts":
/*!*******************************************!*\
  !*** ./src/collect/collect.controller.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (37:14)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|             articleNum: 0,\\n|         });\\n>         const ;\\n|         await this.collectService.create(body);\\n|         return { url: 'http://localhost:6688/collect' };\");\n\n//# sourceURL=webpack:///./src/collect/collect.controller.ts?");

/***/ }),

/***/ "./src/collect/collect.module.ts":
/*!***************************************!*\
  !*** ./src/collect/collect.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst collect_controller_1 = __webpack_require__(/*! ./collect.controller */ \"./src/collect/collect.controller.ts\");\nconst collect_service_1 = __webpack_require__(/*! ./collect.service */ \"./src/collect/collect.service.ts\");\nconst collect_entity_1 = __webpack_require__(/*! ./collect.entity */ \"./src/collect/collect.entity.ts\");\nlet CollectModule = class CollectModule {\n};\nCollectModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forFeature([collect_entity_1.Collect])],\n        controllers: [collect_controller_1.CollectController],\n        providers: [collect_service_1.CollectService],\n    })\n], CollectModule);\nexports.CollectModule = CollectModule;\n\n\n//# sourceURL=webpack:///./src/collect/collect.module.ts?");

/***/ })

};