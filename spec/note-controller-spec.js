it("Note controller is instantiated", function () {
var noteControllerTest = new NoteController();
assertNotNull(noteControllerTest.noteList);
assertNotNull(noteControllerTest.noteListView);
});


it("sets the correct HTML text", function() {
var newNoteTest = new Note("It's thursday");
var noteListTest = new NoteList();
noteListTest.pushToNoteModels(newNoteTest);
var noteControllerTest = new NoteController(noteListTest)
dummyElement = document.createElement('div')
dummyElement.innerHTML = "this is a test"
var htmlResult = "<ul><li><div>It's thursday</div></li></ul>";
noteControllerTest.getHtml(dummyElement)
assert.isTrue(dummyElement.innerHTML === htmlResult);
});
