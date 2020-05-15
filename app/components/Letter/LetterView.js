export class LetterView {
    constructor() {
        this.letter = document.querySelector('.letter');
    }

    renderLetter({ appeal, body, questions }) {
        if (questions.length) questions.unshift('\n')
        questions = questions.map((str, index) => {
            if (index === 0) return str;
            return `- ${str}\n`;
        }).join('')
        this.letter.innerHTML = `
--- Hello ${appeal}---

${body}

Please provide some more information:
${questions}
Best regards,
Ruslan
        `


    }
}
