newNote = new Note("Favourite drink: seltzer");
var noteList = new NoteList()
noteList.pushToNoteModels(newNote)
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
  document
  .getElementById("app")
  .innerHTML = noteList.note.id;
};
