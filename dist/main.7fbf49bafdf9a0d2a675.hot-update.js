exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst person_module_1 = __webpack_require__(/*! ./person/person.module */ \"./src/person/person.module.ts\");\nconst write_module_1 = __webpack_require__(/*! ./write/write.module */ \"./src/write/write.module.ts\");\nlet AppModule = class AppModule {\n    constructor(connection) {\n        this.connection = connection;\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [typeorm_1.TypeOrmModule.forRoot(), person_module_1.PersonModule, write_module_1.WriteModule],\n        controllers: [app_controller_1.AppController],\n        providers: [app_service_1.AppService, Write],\n    }),\n    __metadata(\"design:paramtypes\", [typeorm_2.Connection])\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst hbs = __webpack_require__(/*! hbs */ \"hbs\");\nasync function bootstrap() {\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\n    app.useStaticAssets(path_1.join(__dirname, '..', 'public'), {\n        prefix: '/public/',\n    });\n    app.setBaseViewsDir(path_1.join(__dirname, '..', '/views'));\n    app.setViewEngine('hbs');\n    hbs.registerPartials(path_1.join(__dirname, '..', '/views/partials'));\n    await app.listen(6688);\n    if (true) {\n        module.hot.accept();\n        module.hot.dispose(() => app.close());\n    }\n}\nbootstrap();\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

};