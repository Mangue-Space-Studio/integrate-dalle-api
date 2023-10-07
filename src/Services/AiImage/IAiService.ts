import ImagePromptParams from "../../Controllers/RequestParams/ImagePromptParams";
import TextPromptParams from "../../Controllers/RequestParams/TextPromptParams";

interface IAiService{
    getImageUrl(params: ImagePromptParams): Promise<string | any>;
    getStory(params: TextPromptParams): Promise<string | any>;
}

export default IAiService;