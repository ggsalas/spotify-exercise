class commentsController {
  constructor(commentsService) {
    this.commentsService = commentsService;
    this.comments;
    this.albumId;
    this.limit = 2;
    this.commentWrite = false;
  }

  $onChanges(changes) {
    this.albumId = changes.albumId.currentValue;
    // avoid first change
    if(changes.albumId.isFirstChange()) {
      return;
    }

    this.commentList();
  }

  commentList() {
    this.commentsService.getComments(this.albumId)
    .then(res => this.comments = res.data);    
  }

  submitForm($event) {
    this.commentsService.addComment($event)
    .then( () => {
      this.commentList();
      this.commentWrite = false;
    });
  }

  loadMore() {
    this.limit < this.comments.length ? this.limit += 3 : this.limit = this.comments.length;
  }
}

export default commentsController;
