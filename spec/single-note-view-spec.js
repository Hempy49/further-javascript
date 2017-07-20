(function() {
  var note = new Note ("Another note")
  var singleNoteView = new SingleNoteView(note);
  
  it("tests single note view", function () {
    assert.isTrue(singleNoteView.note === note)
  });
  
  it("test converts note to Html", function () {
    assert.isTrue(singleNoteView.noteToHtml() === "<div>Another note</div>")
  });
})();
