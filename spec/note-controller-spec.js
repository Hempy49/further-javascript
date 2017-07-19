it("Note controller is instantiated", function () {
  noteController = new NoteController();
  assertNotNull(noteController.newNote);
  assertNotNull(noteController.noteList);
  assertNotNull(noteController.noteListView);
});

// it("description", function () {
//   noteController = new NoteController();
//   htmlElementDouble = document.createElement('div');
//   document.getElementById = htmlElementDouble
//   htmlElementDouble.innerHtml = noteController.getHtml();
//
//   console.log(document.getElementById.innerHTML);
//   assert.isTrue(document.getElementById.innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
// });
