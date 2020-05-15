export class FormModel {
  constructor() {
    this.data = [
      {
        id: 1,
        bid:
          'We have senior-level QA Engineers in our team who could provide testing for your mobile app.',
      },
      {
        id: 2,
        bid:
          'Thanks for sharing the link. We have senior-level QA Engineers in our team who match your requirements and could provide automated testing for your website.',
      },
      {
        id: 3,
        bid:
          'We have experienced QA Engineers in our team who could provide tests for your project.',
      },
    ];
  }

  getData() {
      return this.data;
  }
}
