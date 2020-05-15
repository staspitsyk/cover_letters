export class LetterView {
  constructor() {
    this.letter = null;
    this.letterContainer = document.querySelector('.letter-container');
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard() {
    const el = document.createElement('textarea');
    console.log(this.letter);
    el.value = this.letter.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  renderLetterContainerContent() {
    this.letterContainer.innerHTML = '';
    const coppyBtn = document.createElement('button');
    coppyBtn.classList.add('btn', 'btn-primary');
    coppyBtn.innerHTML = 'Copy';
    coppyBtn.addEventListener('click', this.copyToClipboard);
    this.renderLetterPre();

    this.letter = document.querySelector('.letter');
    this.letterContainer.prepend(coppyBtn);
  }

  renderLetterPre() {
    this.letterContainer.innerHTML = `
        <pre class="letter">
        </pre>
        `;
  }

  renderLetter({ appeal, body, questions }) {
    this.renderLetterContainerContent();
    if (questions.length) questions.unshift('\n');

    questions = questions
      .map((str, index) => {
        if (index === 0) return str;
        return `- ${str}\n`;
      })
      .join('');

    this.letter.innerHTML = `
--- Hello ${appeal}---

${body}

Please provide some more information:
${questions}
Best regards,
Ruslan
        `;
  }
}
