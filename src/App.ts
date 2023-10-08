import express from 'express';
import AiController from './Controllers/AiController';
import HealthController from './Controllers/HealthController';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express()
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Controllers:
app.use(new AiController().routes());
app.use(new HealthController().routes());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})