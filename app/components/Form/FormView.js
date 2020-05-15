export class FormView {
    constructor(handleSubmit, handleAddExample) {
        this.form = document.forms['form-utor'];
        this.appeal = this.form["appeal"];
        this.body = this.form["body"];
        this.linkQuestion = this.form["linkQuestion"];
        this.funcQuestion = this.form["funcQuestion"];
        this.genQuestion1 = this.form["genQuestion1"];
        this.genQuestion2 = this.form["genQuestion2"];
        this.uniqQuastion1 = this.form["uniqQuastion1"];
        this.uniqQuastion2 = this.form["uniqQuastion2"];
        this.startQuestion = this.form["startQuestion"];

        this.addAndEditBtns = document.querySelectorAll('.add-and-edit');

        this.addAndEditBtns.forEach(btn => btn.addEventListener('click', () => handleAddExample(btn.dataset.id)));
        this.submitButton = document.querySelector('#submit');
        this.submitButton.addEventListener('click', handleSubmit);
    }

    getAppeal() {
        return this.appeal.value;
    }

    getBody() {
        return this.body.value;
    }

    getLinkQuestion() {
        if (this.linkQuestion.value) {
            return `Could you share the link to your ${this.linkQuestion.value}?`
        } else {
            return '';
        }
    }

    getFuncQuestion() {
        if (this.funcQuestion.value) {
            return `What functionality does your ${this.funcQuestion.value} have?`;
        } else {
            return '';
        }
    }

    getGenQuestion1() {
        return this.genQuestion1.value;
    }

    getGenQuestion2() {
        return this.genQuestion2.value;
    }

    getUniqQuastion1() {
        return this.uniqQuastion1.value;
    }

    getUniqQuastion2() {
        return this.uniqQuastion2.value;
    }

    getStartQuestion() {
        if (this.startQuestion.checked) {
            return 'When would you like to start?'
        } else {
            return '';
        }
    }
}