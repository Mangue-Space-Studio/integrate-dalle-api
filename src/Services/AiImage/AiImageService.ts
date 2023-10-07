import IAiImageService from "./IAiImageService";
import axios from "axios";
import ImagePromptParams from "../../Controllers/RequestParams/ImagePromptParams";
import OpenAI from "openai";

class AiImageService implements IAiImageService {
    public openAi : OpenAI;

    constructor(){
        this.openAi = new OpenAI({apiKey: process.env.OPEN_API_KEY});
    }

    async getImageUrl(params: ImagePromptParams): Promise<string | undefined> {
        let prompt = `Crie uma ilustração com linhas pretas e branca para criança de ${params.age} colorir com a personagem: ${params.character} que é ${params.characterDescription}.`;
        const response = await this.openAi.images.generate({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          });

          return response.data[0].url;
    }
};

export default AiImageService;

