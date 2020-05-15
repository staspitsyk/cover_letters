import { FormView } from "./FormView.js";

export class FormController {
    constructor({ notify }) {
        this.view = new FormView(this.handleSubmit.bind(this));
        this.notify = notify;
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = {
            appeal: this.view.getAppeal(),
            body: this.view.getBody(),
            questions: [
                this.view.getLinkQuestion(),
                this.view.getFuncQuestion(),
                this.view.getGenQuestion1(),
                this.view.getGenQuestion2(),
                this.view.getUniqQuastion1(),
                this.view.getUniqQuastion2(),
                this.view.getStartQuestion()
            ],
        }

        this.notify("generate-letter", data);
    }
}