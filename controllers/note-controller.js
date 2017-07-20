(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }
  
  NoteController.prototype.getHtml = function (element) {
    element.innerHTML = this.noteListView.toHtml();
  };
  
  exports.NoteController = NoteController;
})(this);
