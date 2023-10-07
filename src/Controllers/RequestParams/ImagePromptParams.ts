class ImagePromptParams{
    public age: number;
    public characterDescription: string;
    public character: string;

    constructor(age: number,
                characterDescription: string,
                character: string,
                scientificAdvance : string){
        this.age = age;
        this.characterDescription = characterDescription;
        this.character = character;
    }
}

export default ImagePromptParams;