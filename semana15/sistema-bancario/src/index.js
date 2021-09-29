"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var users = [
    {
        id: 1,
        cpf: 10771942548,
        name: "Maria",
        age: 28,
        birth: 20031993
    },
    {
        id: 2,
        cpf: 10878942548,
        name: "Luana",
        age: 25,
        birth: 20031996
    },
    {
        id: 3,
        cpf: 10070040048,
        name: "Marina",
        age: 17,
        birth: 20032024
    }
];
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("O Servidor est\u00E1 disponivel! http://localhost: " + address.port);
    }
    else {
        console.error("Failure upon starting server.");
    }
});
