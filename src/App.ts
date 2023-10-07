import express from 'express';
import AiImageController from './Controllers/AiImagesController';
import dotenv from 'dotenv';
import cors from 'cors'

const app = express()
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes:
app.use(new AiImageController().routes());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})