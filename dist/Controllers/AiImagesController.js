"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AiImageService_1 = __importDefault(require("../Services/AiImage/AiImageService"));
class AiImageController {
    constructor() {
        this.aiImageService = new AiImageService_1.default();
    }
    async getMessages(req, res, next) {
        const request = req.body;
        return await this.aiImageService.getImageUrl(request);
    }
    routes() {
        const router = (0, express_1.Router)();
        router.get("/ai-images", this.getMessages.bind(this));
        return router;
    }
}
exports.default = AiImageController;
