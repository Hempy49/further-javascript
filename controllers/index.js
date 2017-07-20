newNote = new Note("Favourite drink: seltzer");
var noteList = new NoteList()
noteList.pushToNoteModels(newNote)
var noteController = new NoteController(noteList)


window.onload = function() {
  var element = document.getElementById("app")
  noteController.getHtml(element)
}
