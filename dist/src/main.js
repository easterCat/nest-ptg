"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'), {
        prefix: '/public/',
    });
    app.setBaseViewsDir(path_1.join(__dirname, '..', '/views'));
    app.setViewEngine('hbs');
    hbs.registerPartials(path_1.join(__dirname, '..', '/views/partials'));
    await app.listen(6688, () => {
        console.log('当前服务运行在localhost:6688');
    });
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map