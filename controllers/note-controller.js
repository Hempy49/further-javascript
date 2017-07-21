(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.getHtml = function (element) {
    element.innerHTML = this.noteListView.toHtml();
  };

  window.onload = function() {
    var element = document.getElementById("app");
    noteController.getHtml(element)
    var ele = document.getElementById("text");
    ele.addEventListener("submit",
    function (test) {
      test.preventDefault();
      console.log(test);
      return false;
    }, false);
  };


  makeNewURLForNoteID();

  function makeNewURLForNoteID() {
    window.addEventListener("hashchange", showSingleNote);
  };

  function showSingleNote() {
    showNote(getNoteID(window.location));
  };

  function getNoteID(location) {
    return location.hash.split("#")[1];
  }

  function showNote(id) {
    var noteText;
    noteList.getNotes().forEach(function(note) {
      if (note.id == id) {
        noteText = note.text;
      }
    });

    document
    .getElementById("app")
    .innerHTML = noteText;
  };

  exports.NoteController = NoteController;
})(this);
