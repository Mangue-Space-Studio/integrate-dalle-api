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
        const prompt = `Crie uma história tipo fábula com o animal: ${params.character}, para aprender sobre ${params.subject}, con conceitos, teorias e leis 
        trazendo assuntos e narrativas interessantes para crianças com a idade de ${params.age} anos de maneira leve e divertida.`;

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

        let prompt = `Crie uma ilustração com linhas pretas e branca para criança de ${params.age} anos 
        colorir com a personagem: ${params.character} que é ${params.characterDescription}.`;

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

