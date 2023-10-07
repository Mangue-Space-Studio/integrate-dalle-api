import { Router, Request, Response, NextFunction } from "express";
import IAiService from "../Services/AiImage/IAiService";
import AiService from "../Services/AiImage/AiService";
import ImagePromptParams from "./RequestParams/ImagePromptParams";
import TextPromptParams from "./RequestParams/TextPromptParams";

class AiController {
    readonly aiImageService: IAiService;

    constructor() {
        this.aiImageService = new AiService();
    }

    public async getImageLink(req: Request, res: Response, next: NextFunction): Promise<string | any> {
        const request: ImagePromptParams = req.body as ImagePromptParams;
        console.log("request", request);

        let url = await this.aiImageService.getImageUrl(request);

        res.status(200).json({ url });
    }

    public async getStory(req: Request, res: Response, next: NextFunction) {
        const request: TextPromptParams = req.body as TextPromptParams;
        console.log("request", request);

        try {
            if (StoryConstants.possibleSubjects.includes(request.subject) &&
                StoryConstants.possibleCharacters.includes(request.character)) {
                let story = await this.aiImageService.getStory(request);

                res.status(200).json({ story });
            }
        }

        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ocorreu um erro ao gerar a história." });
        }

        res.status(400).json({ error: "Personagem inválido." });
    }

    public routes(): Router {
        const router = Router();

        router.get("/ai-images", this.getImageLink.bind(this));
        router.get("/ai-stories", this.getStory.bind(this));

        return router;
    }
}

export default AiController;
