newNote = new Note("Favourite drink: seltzer");
newNote2 = new Note("one more");
var noteList = new NoteList()
noteList.pushToNoteModels(newNote)
noteList.pushToNoteModels(newNote2)
var noteController = new NoteController(noteList)
