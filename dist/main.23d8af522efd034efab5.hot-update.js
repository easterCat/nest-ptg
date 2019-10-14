exports.id = "main";
exports.modules = {

/***/ "./src/person/person.module.ts":
/*!*************************************!*\
  !*** ./src/person/person.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst person_service_1 = __webpack_require__(/*! ./person.service */ \"./src/person/person.service.ts\");\nconst person_controller_1 = __webpack_require__(/*! ./person.controller */ \"./src/person/person.controller.ts\");\nconst person_entity_1 = __webpack_require__(/*! ./person.entity */ \"./src/person/person.entity.ts\");\nlet PersonModule = class PersonModule {\n};\nPersonModule = __decorate([\n    common_1.Module({\n        imports: [TypeOrmModule.forFeature([person_entity_1.Person])],\n        providers: [person_service_1.PersonService],\n        controllers: [person_controller_1.PersonController],\n    })\n], PersonModule);\nexports.PersonModule = PersonModule;\n\n\n//# sourceURL=webpack:///./src/person/person.module.ts?");

/***/ })

};