(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

NoteListView.prototype.toHtml = function() {
  if (noteList.noteModels.length >= 1) {
    return "<ul>" + this.toHtmlforEachText() + "</ul>"
  };
};

NoteListView.prototype.toHtmlforEachText = function () {
  var notesHtml = []
  this.noteList.noteModels.forEach(function(note){
     notesHtml.push("<li><div>" + note.text.substring(0,20) + "</div></li>");
  })
  return notesHtml.join();
};

  exports.NoteListView = NoteListView;
})(this);
