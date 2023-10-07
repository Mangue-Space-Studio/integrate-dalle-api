import express from 'express';
import AiImageController from './Controllers/AiImagesController';
import dotenv from 'dotenv';
import cors from 'cors';
// import router from './Controllers/teste';

const app = express()
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes:
const imageController : AiImageController = new AiImageController()
app.use(imageController.routes());

// app.use(router)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})