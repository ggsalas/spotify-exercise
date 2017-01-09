class commentsController {
  constructor(commentsService) {
    this.commentsService = commentsService;
  }

  $onChanges(changes) {
    this.commentsService.getComments(changes.albumId.currentValue)
    .then((res) => console.log(res));    
  }

  submitForm(formData) {
    this.commentsService.addComment(formData)
    .then(/* TODO */ );
  }
}

export default commentsController;
