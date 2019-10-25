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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Collect = class Collect {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Collect.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 80 }),
    __metadata("design:type", String)
], Collect.prototype, "collectName", void 0);
__decorate([
    typeorm_1.Column({ length: 300 }),
    __metadata("design:type", String)
], Collect.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], Collect.prototype, "collectTags", void 0);
__decorate([
    typeorm_1.Column({ length: 30 }),
    __metadata("design:type", String)
], Collect.prototype, "createTime", void 0);
__decorate([
    typeorm_1.Column({ length: 30 }),
    __metadata("design:type", String)
], Collect.prototype, "updateTime", void 0);
__decorate([
    typeorm_1.Column({ length: 300 }),
    __metadata("design:type", String)
], Collect.prototype, "articleIds", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Collect.prototype, "articleNum", void 0);
__decorate([
    typeorm_1.Column({ length: 120 }),
    __metadata("design:type", String)
], Collect.prototype, "imagePath", void 0);
Collect = __decorate([
    typeorm_1.Entity()
], Collect);
exports.Collect = Collect;
//# sourceMappingURL=collect.entity.js.map