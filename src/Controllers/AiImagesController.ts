import { Router, Request, Response, NextFunction } from "express";
import IAiImageService from "../Services/AiImage/IAiImageService";
import AiImageService from "../Services/AiImage/AiImageService";
import ImagePromptParams from "./RequestParams/ImagePromptParams";

class AiImageController {
    readonly aiImageService: IAiImageService;

    constructor() {
        this.aiImageService = new AiImageService();
    }

    public async getMessages(req: Request, res: Response, next: NextFunction): Promise<string | any> {
        const request : ImagePromptParams = req.body as ImagePromptParams;
        console.log("request", request);
        
        let url = await this.aiImageService.getImageUrl(request);

        res.status(200).json({url})
    }

    public routes(): Router {
        const router = Router();

        router.get("/ai-images", this.getMessages.bind(this));

        return router;
    }
}

export default AiImageController;
