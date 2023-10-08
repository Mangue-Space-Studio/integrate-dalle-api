import { Router, Request, Response, NextFunction } from "express";
import IAiService from "../Services/AiImage/IAiService";
import AiService from "../Services/AiImage/AiService";
import ImagePromptParams from "./RequestParams/ImagePromptParams";
import TextPromptParams from "./RequestParams/TextPromptParams";
import StoryConstants from "../Domain/StoryConstants";

class AiController {
    readonly aiImageService: IAiService;

    constructor() {
        this.aiImageService = new AiService();
    }

    public async getImageLink(req: Request, res: Response, next: NextFunction): Promise<string | any> {
        const request: ImagePromptParams = req.body as ImagePromptParams;
        console.log("request", request);

        try {
            if (request.character !== null &&
                StoryConstants.possibleCharacters.includes(request.character) &&
                request.characterDescription !== null &&
                request.character.trim().length > 0 &&
                (!isNaN(request.age) && request.age > 0)) {
                let url = await this.aiImageService.getImageUrl(request);

                res.status(200).json({ url });
            }
            else {
                res.status(400).json({ error: "Personagem inválido." });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ocorreu um erro ao gerar a história." });
        }
    }

    public async getStory(req: Request, res: Response, next: NextFunction): Promise<string | any> {
        const request: TextPromptParams = req.body as TextPromptParams;
        console.log("request", request);

        try {
            if (StoryConstants.possibleSubjects.includes(request.subject) &&
                StoryConstants.possibleCharacters.includes(request.character)) {
                let story = await this.aiImageService.getStory(request);

                res.status(200).json({ story });
            }
            else {
                res.status(400).json({ error: "Personagem inválido." });
            }
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ocorreu um erro ao gerar a história." });
        }
    }

    public routes(): Router {
        const router = Router();

        router.post("/ai-images", this.getImageLink.bind(this));
        router.post("/ai-stories", this.getStory.bind(this));

        return router;
    }
}

export default AiController;