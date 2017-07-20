newNote = new Note("Favourite drink: seltzer");
var noteList = new NoteList()
noteList.pushToNoteModels(newNote)
// console.log(noteList)
var noteController = new NoteController(noteList)
console.log(noteController)

window.onload = function() {
  // console.log(noteList)
  console.log(document.getElementById("app").innerHTML)
  noteController.getHtml(document.getElementById("app").innerHTML)
}
