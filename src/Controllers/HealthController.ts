import { Router, Request, Response, NextFunction } from "express";

class HealthController {
    public async getMessages(req: Request, res: Response, next: NextFunction): Promise<string | any> {
        res.status(200).json({ health : "Ok" });
    }

    public routes(): Router {
        const router = Router();

        router.get("/health", this.getMessages.bind(this));

        return router;
    }
}

export default HealthController;
