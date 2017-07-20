
var note = new Note("Note message");
var noteList = new NoteList();
var noteListView = new NoteListView(noteList);

it("test note list view", function () {
  assert.isTrue(noteListView.noteList === noteList)
});

it("test to Html", function () {
  noteListView.noteList.pushToNoteModels(note);
  assert.isTrue(noteListView.toHtml() === "<ul><li><div>Note message</div></li></ul>")
});

it("test to Html no note models", function () {
  var noteList2 = new NoteList();
  var noteListView2 = new NoteListView(noteList2);
  assert.isTrue(noteListView2.toHtml() === '<ul></ul>')
});

it("test to Html for each text", function () {
  assert.isTrue(noteListView.toHtmlforEachText() === "<li><div>Note message</div></li>")
});

it("test note longer than 20 chars", function () {
  var longNote = new Note("123456789123456789123");
  var noteList3 = new NoteList();
  noteList3.pushToNoteModels(longNote);
  var noteListView3 = new NoteListView(noteList3);
  assert.isTrue(noteListView3.toHtml() === "<ul><li><div>12345678912345678912</div></li></ul>")
});
