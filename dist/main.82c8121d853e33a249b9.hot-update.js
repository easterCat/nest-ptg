exports.id = "main";
exports.modules = {

/***/ "./src/write/write.module.ts":
/*!***********************************!*\
  !*** ./src/write/write.module.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst write_controller_1 = __webpack_require__(/*! ./write.controller */ \"./src/write/write.controller.ts\");\nconst write_service_1 = __webpack_require__(/*! ./write.service */ \"./src/write/write.service.ts\");\nlet WriteModule = class WriteModule {\n};\nWriteModule = __decorate([\n    common_1.Module({\n        controllers: [write_controller_1.WriteController],\n        providers: [write_service_1.WriteService]\n    })\n], WriteModule);\nexports.WriteModule = WriteModule;\n\n\n//# sourceURL=webpack:///./src/write/write.module.ts?");

/***/ }),

/***/ "./src/write/write.service.ts":
/*!************************************!*\
  !*** ./src/write/write.service.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet WriteService = class WriteService {\n};\nWriteService = __decorate([\n    common_1.Injectable()\n], WriteService);\nexports.WriteService = WriteService;\n\n\n//# sourceURL=webpack:///./src/write/write.service.ts?");

/***/ })

};