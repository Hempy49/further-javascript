(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
    }

  NoteController.prototype.getHtml = function (element) {
    // console.log(element)
    console.log(this.noteListView)
    element = this.noteListView.toHtml();
  };

  exports.NoteController = NoteController;
})(this);
