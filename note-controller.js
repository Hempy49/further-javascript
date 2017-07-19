(function(exports) {
  function NoteController(elementId) {
    this.noteList = new NoteList();
    this.newNote = new Note("Favourite drink: seltzer");
    this.noteList.pushToNoteModels(this.newNote);
    this.noteListView = new NoteListView(this.noteList);
    this.htmlElement = document.getElementById(elementId);
  }

  NoteController.prototype.getHtml = function () {
    return this.noteListView.toHtml();
  };

  window.onload = function() {
    noteController = new NoteController('app')
    noteController.htmlElement.innerHTML = noteController.getHtml();
  }
  exports.NoteController = NoteController;
})(this);
