exports.id = "main";
exports.modules = {

/***/ "./src/write/write.service.ts":
/*!************************************!*\
  !*** ./src/write/write.service.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet WriteService = class WriteService {\n    constructor(personRepository) {\n        this.personRepository = personRepository;\n    }\n    async create(createData) {\n        return await this.personRepository.save(createData);\n    }\n    async remove(id) {\n        return await this.personRepository.delete(id);\n    }\n    async findAll() {\n        return await this.personRepository.find();\n    }\n};\nWriteService = __decorate([\n    common_1.Injectable(),\n    __param(0, typeorm_1.InjectRepository(Person)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository])\n], WriteService);\nexports.WriteService = WriteService;\n\n\n//# sourceURL=webpack:///./src/write/write.service.ts?");

/***/ })

};