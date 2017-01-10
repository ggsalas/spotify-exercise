class commentFormController {
  constructor() {
    this.data = {
      albumId: '',
      email: '',
      text: '',
      id: 'comment-' + Date.now(), 
      avatar: 'https://placehold.it/56/404040'
    };
  }

  $onChanges(changes) {
    this.data.albumId = changes.albumId.currentValue;
  }

  formSubmit() {
    this.formData({
      $event: this.data 
    });
  }
}

export default commentFormController;
