(function() {
  var note = new Note("Javascript is sexy!");
  var secondNote = new Note("no it's not!");
  it("test note take test", function () {
    assert.isTrue(note.text === "Javascript is sexy!");
  });
  
  it("adds unique id to note strating from 0", function() {
    assert.isTrue(note.id === 0);
  });
  
  it("adds unique id to notes", function() {
    assert.isTrue(secondNote.id === 1);
  });
  
  
})();
