class commentsController {
  constructor(commentsService) {
    this.commentsService = commentsService;
    this.comments = [];
    this.albumId;
  }

  $onChanges(changes) {
    this.albumId = changes.albumId.currentValue;
    // avoid first change
    if(changes.albumId.isFirstChange()) {
      return;
    }

    this.commentsService.getComments(this.albumId)
    .then(res => this.comments = res.data);    
  }

  submitForm($event) {
    console.log('formDataEvent on comments: ', $event)
    this.commentsService.addComment($event)
    .then(
      this.commentsService.getComments(this.albumId)
    )
  }
}

export default commentsController;
