import { LetterView } from "./LetterView.js";
import { LetterModel } from "./LetterModel.js";

export class LetterController {
    constructor({ subscribe }) {
        this.view = new LetterView();
        this.model = new LetterModel();
        this.subscribe = subscribe;
        this.subscribe("generate-letter", this.handleGenerateLetter.bind(this));
    }

    handleGenerateLetter(data) {
        data = this.model.prepareData(data)
        this.view.renderLetter(data);
    }

}