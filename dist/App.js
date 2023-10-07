"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AiImagesController_1 = __importDefault(require("./Controllers/AiImagesController"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Routes:
app.use(new AiImagesController_1.default().routes());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});
