import IAiImageService from "./IAiImageService";
import axios from "axios";
import ImagePromptParams from "../../Controllers/RequestParams/ImagePromptParams";

class AiImageService implements IAiImageService {
    async getImageUrl(params: ImagePromptParams): Promise<string> {
        let prompt = `Crie uma ilustração com linhas pretas e branca para criança de ${params.age} colorir com a personagem: ${params.character} que é ${params.characterDescription}.`;

        console.log('cheguei aqui');
        
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/images/generate',
                {
                    model: 'image-alpha-001',
                    prompt: prompt,
                    max_tokens: 100
                },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const imageUrl: string = response.data.url;
            console.table(response)
            return imageUrl;
        }
        catch (error) {
            console.error('Erro ao gerar a imagem:', error);
            throw error;
        }
    }
};

export default AiImageService;

