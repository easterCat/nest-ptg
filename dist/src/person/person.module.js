"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const person_service_1 = require("./person.service");
const person_controller_1 = require("./person.controller");
const person_entity_1 = require("./person.entity");
let PersonModule = class PersonModule {
};
PersonModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([person_entity_1.Person])],
        providers: [person_service_1.PersonService],
        controllers: [person_controller_1.PersonController],
    })
], PersonModule);
exports.PersonModule = PersonModule;
//# sourceMappingURL=person.module.js.map