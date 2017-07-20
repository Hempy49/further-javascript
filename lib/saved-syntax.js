NoteListView.prototype.toHtmlforEachText = function () {
  var notesHtml = []
  this.noteList.noteModels.forEach(function(note){
     notesHtml.push("<li><div><a href=#" + note.id + ">" + note.text.substring(0,20) + "</a></div></li>");
     console.log(note)
  })
  return notesHtml.join();
};


newNote = new Note("Favourite drink: seltzer");
var noteList = new NoteList()
noteList.pushToNoteModels(newNote)
var noteController = new NoteController(noteList)


window.onload = function() {
  var element = document.getElementById("app")
  noteController.getHtml(element)
}

function makeNewURLForNoteID() {
  window.addEventListener("hashchange", showSingleNote);
};

function showSingleNote() {
  showNote(getNoteID)

}
