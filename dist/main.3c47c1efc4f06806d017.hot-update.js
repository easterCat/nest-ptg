exports.id = "main";
exports.modules = {

/***/ "./src/write/write.controller.ts":
/*!***************************************!*\
  !*** ./src/write/write.controller.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (39:12)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|             result = Object.assign(result, {\\n|                 result: json.\\n>             });\\n|             console.log(json);\\n|         }\");\n\n//# sourceURL=webpack:///./src/write/write.controller.ts?");

/***/ }),

/***/ "./src/write/write.module.ts":
/*!***********************************!*\
  !*** ./src/write/write.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst write_controller_1 = __webpack_require__(/*! ./write.controller */ \"./src/write/write.controller.ts\");\nconst write_service_1 = __webpack_require__(/*! ./write.service */ \"./src/write/write.service.ts\");\nconst write_entity_1 = __webpack_require__(/*! ./write.entity */ \"./src/write/write.entity.ts\");\nlet WriteModule = class WriteModule {\n};\nWriteModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forFeature([write_entity_1.Write])],\n        controllers: [write_controller_1.WriteController],\n        providers: [write_service_1.WriteService],\n    })\n], WriteModule);\nexports.WriteModule = WriteModule;\n\n\n//# sourceURL=webpack:///./src/write/write.module.ts?");

/***/ }),

/***/ "fs-extra":
false

};