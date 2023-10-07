import IAiService from "./IAiService";
import axios from "axios";
import ImagePromptParams from "../../Controllers/RequestParams/ImagePromptParams";
import OpenAI from "openai";
import TextPromptParams from "../../Controllers/RequestParams/TextPromptParams";

class AiService implements IAiService {
    public openAi: OpenAI;

    constructor() {
        this.openAi = new OpenAI({ apiKey: process.env.OPEN_API_KEY });
    }

    public async getStory(params: TextPromptParams): Promise<string | any> {
        const prompt = `Quero criar uma história com o animal: ${params.character}, para aprender a sobre ${params.subject} para crianças com
        a idade de ${params.age}`;

        const response = await this.openAi.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            max_tokens: 100,
        });

        return response.choices[0].message.content;
    }

    public async getImageUrl(params: ImagePromptParams): Promise<string | any> {
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

export default AiService;

