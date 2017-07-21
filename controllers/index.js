newNote = new Note("Favourite drink: seltzer");
newNote2 = new Note("one more");
var noteList = new NoteList()
noteList.pushToNoteModels(newNote)
noteList.pushToNoteModels(newNote2)
var noteController = new NoteController(noteList)

window.onload = function() {
  var element = document.getElementById("app")
  noteController.getHtml(element)
}
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
