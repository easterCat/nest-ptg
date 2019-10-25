exports.id = "main";
exports.modules = {

/***/ "./src/write/write.entity.ts":
/*!***********************************!*\
  !*** ./src/write/write.entity.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet Write = class Write {\n};\n__decorate([\n    typeorm_1.PrimaryGeneratedColumn(),\n    __metadata(\"design:type\", Number)\n], Write.prototype, \"WriteID\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"CreateTime\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"UpdateTime\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"Title\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 100 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"collectID\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 80 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"collectName\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"Description\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"SavePath\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 300 }),\n    __metadata(\"design:type\", String)\n], Write.prototype, \"Tags\", void 0);\nWrite = __decorate([\n    typeorm_1.Entity()\n], Write);\nexports.Write = Write;\n\n\n//# sourceURL=webpack:///./src/write/write.entity.ts?");

/***/ })

};