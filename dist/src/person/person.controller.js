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
const person_service_1 = require("./person.service");
let PersonController = class PersonController {
    constructor(PersonService) {
        this.PersonService = PersonService;
    }
    async root() {
        let result = await this.PersonService.findAll();
        return { title: '我是添加页面', message: '这里是person', result: result };
    }
    async create(createData) {
        let res = await this.PersonService.create(createData);
        let result = await this.findAll();
        return { title: '我是添加页面', message: '这里是person', result: result };
    }
    async remove(id) {
        return this.PersonService.remove(id);
    }
    async findAll(query, request) {
        return this.PersonService.findAll();
    }
    async findOne(id) {
        console.log(id);
        return `This action returns a #${id} cat`;
    }
    async update(id, updateData) {
        return `This action updates a #${id} cat`;
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('person.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "root", null);
__decorate([
    common_1.Post('create'),
    common_1.Render('person.hbs'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "create", null);
__decorate([
    common_1.Delete('delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "remove", null);
__decorate([
    common_1.Get('find'),
    __param(0, common_1.Query()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "findAll", null);
__decorate([
    common_1.Get('find/:id'),
    __param(0, common_1.Param(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "findOne", null);
__decorate([
    common_1.Put('update/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "update", null);
PersonController = __decorate([
    common_1.Controller('person'),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map