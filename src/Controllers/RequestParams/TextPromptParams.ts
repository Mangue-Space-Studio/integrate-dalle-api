class TextPromptParams {
    public character: string;
    public subject: string;
    public age: number;

    constructor(character: string,
                subject: string,
                age: number) {
        this.character = character;
        this.subject = subject;
        this.age = age;
    }
}

export default TextPromptParams;