import ImagePromptParams from "../../Controllers/RequestParams/ImagePromptParams";

interface IAiImageService{
    getImageUrl(params: ImagePromptParams): Promise<string>;
}

export default IAiImageService;