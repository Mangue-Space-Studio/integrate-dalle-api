"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AiImageService {
    async getImageUrl(params) {
        let prompt = `Crie uma ilustração com linhas pretas e branca para criança de ${params.age} colorir com a personagem: ${params.character} que é ${params.characterDescription}.`;
        try {
            const response = await axios_1.default.post('https://api.openai.com/v1/images/generate', {
                model: 'image-alpha-001',
                prompt: prompt,
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            });
            const imageUrl = response.data.url;
            return imageUrl;
        }
        catch (error) {
            console.error('Erro ao gerar a imagem:', error);
            throw error;
        }
    }
}
;
exports.default = AiImageService;
