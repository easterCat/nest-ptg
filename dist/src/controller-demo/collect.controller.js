"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const createCollect_dto_1 = require("./createCollect.dto");
let CollectController = class CollectController {
    findAll() {
        return `<div style="color:blue">
        <form action="/collect/create" method="post">
            <div>
                <label for="name">Name:</label>
                <input name="name" type="text" id="name">
            </div>
            <div>
                <label for="mail">E-mail:</label>
                <input name="email" type="email" id="mail">
            </div>
            <div>
                <label for="msg">Message:</label>
                <textarea name="msg" id="msg"></textarea>
            </div>
            <button type="submit">Send your message</button>
        </form>
    </div>`;
    }
    go(version) {
        if (version && version === '5') {
            return { url: 'https://www.cnblogs.com/' };
        }
    }
    findOne(id, order) {
        return `This action returns a #${id} cat order by ${order} `;
    }
    matchRoute() {
        return '能够匹配上';
    }
    findCollectInfo() {
        return '这里是collect集合中的info页面';
    }
    handleRequest(request, response) {
        let string = '<p style="width:450px;word-break:break-word;">';
        Object.keys(request).forEach(key => {
            string += `<text style="display:inline-block;width:150px;">${key}</text>`;
        });
        string += '</p>';
        response.status(200).send(`<div style="color:red">${string}</div>`);
    }
    createNewCollect(createCollect) {
        return `<div>${createCollect.name} + ${createCollect.email} + ${createCollect.msg}</div>`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CollectController.prototype, "findAll", null);
__decorate([
    common_1.Get('/redirect'),
    common_1.Redirect('https://www.baidu.com', 301),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CollectController.prototype, "go", null);
__decorate([
    common_1.Get(':id/:order'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CollectController.prototype, "findOne", null);
__decorate([
    common_1.Get('/match*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CollectController.prototype, "matchRoute", null);
__decorate([
    common_1.Get('info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CollectController.prototype, "findCollectInfo", null);
__decorate([
    common_1.Get('req'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CollectController.prototype, "handleRequest", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCollect_dto_1.CreateCollectDto]),
    __metadata("design:returntype", String)
], CollectController.prototype, "createNewCollect", null);
CollectController = __decorate([
    common_1.Controller('collect')
], CollectController);
exports.CollectController = CollectController;
//# sourceMappingURL=collect.controller.js.map