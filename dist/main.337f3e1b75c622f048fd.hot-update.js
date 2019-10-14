exports.id = "main";
exports.modules = {

/***/ "./src/write/write.controller.ts":
/*!***************************************!*\
  !*** ./src/write/write.controller.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst write_service_1 = __webpack_require__(/*! ./write.service */ \"./src/write/write.service.ts\");\nlet WriteController = class WriteController {\n    constructor(WriteService) {\n        this.WriteService = WriteService;\n    }\n};\nWriteController = __decorate([\n    common_1.Controller('write'),\n    __metadata(\"design:paramtypes\", [write_service_1.WriteService])\n], WriteController);\nexports.WriteController = WriteController;\n\n\n//# sourceURL=webpack:///./src/write/write.controller.ts?");

/***/ })

};