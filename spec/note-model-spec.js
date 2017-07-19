it("test note take test", function () {
  var note = new Note("Javascript is sexy!");
  assert.isTrue(note.text === "Javascript is sexy!");
});
