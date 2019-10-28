exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst hbs = __webpack_require__(/*! hbs */ \"hbs\");\nasync function bootstrap() {\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\n    app.useStaticAssets(path_1.join(__dirname, '..', 'public'), {\n        prefix: '/public/',\n    });\n    app.setBaseViewsDir(path_1.join(__dirname, '..', '/views'));\n    app.setViewEngine('hbs');\n    hbs.registerPartials(path_1.join(__dirname, '..', '/views/partials'));\n    await app.listen(6688, () => {\n        console.log('当前服务运行在<a></a>');\n    });\n    if (true) {\n        module.hot.accept();\n        module.hot.dispose(() => app.close());\n    }\n}\nbootstrap();\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

};