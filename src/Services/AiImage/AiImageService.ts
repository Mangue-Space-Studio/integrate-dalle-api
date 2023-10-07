import IAiImageService from "./IAiImageService";
import axios from "axios";
import ImagePromptParams from "../../Controllers/RequestParams/ImagePromptParams";
import OpenAI from "openai";

class AiImageService implements IAiImageService {
    public openAi : OpenAI;

    constructor(){
        this.openAi = new OpenAI({apiKey: process.env.OPEN_API_KEY});
        console.log("fui criado")
    }

    async getImageUrl(params: ImagePromptParams): Promise<string | undefined> {
        console.log(`run [getImageUrl] ${params}`)
        
        let prompt = `Crie uma ilustração com linhas pretas e branca para criança de ${params.age} colorir com a personagem: ${params.character} que é ${params.characterDescription}.`;
        
        console.log(prompt);

        const response = await this.openAi.images.generate({
            prompt: prompt,
            n: 1,
            response_format: "url",
            size: "256x256",
          });

          console.log(response);
          return response.data[0].url;
    }
};

export default AiImageService;

