(function() {
  it("Note controller is instantiated", function () {
    var noteControllerTest = new NoteController();
    assertNotNull(noteControllerTest.noteList);
    assertNotNull(noteControllerTest.noteListView);
  });

  it("sets the correct HTML text", function() {
    var newNoteTest = new Note("It's thursday");
    var noteListTest = new NoteList();
    noteListTest.pushToNoteModels(newNoteTest);
    var noteControllerTest = new NoteController(noteListTest);
    var dummyElement = document.createElement('div');
    var htmlResult = "<ul><li><div><a href=\"#8\">It's thursday</a></div></li></ul>";
    noteControllerTest.getHtml(dummyElement);
    assert.isTrue(dummyElement.innerHTML === htmlResult);
  });
})();
