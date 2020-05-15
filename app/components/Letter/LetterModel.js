export class LetterModel {
    constructor() {}
  
    prepareData(data) {
        const newData = JSON.parse(JSON.stringify(data));
        if (newData.appeal) newData.appeal += ' ';

        newData.questions = newData.questions.filter(str => str !== '');

        return newData;
    }
  
  }
  