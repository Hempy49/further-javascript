(function() {
  var note = new Note("Too sexy to code");
  var noteList = new NoteList();
  
  it("test note list", function () {
    assert.isTrue(Array.isArray(noteList.noteModels));
  });
  
  it("test note in array", function () {
    noteList.pushToNoteModels(note);
    assert.isTrue(noteList.noteModels.length === 1);
  });
})();
