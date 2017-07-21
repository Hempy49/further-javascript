(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.toHtml = function() {
    return (this.noteList.noteModels.length >= 1) ? ("<ul>" + this.toHtmlforEachText() + "</ul>") : ("")
  };

  NoteListView.prototype.toHtmlforEachText = function () {
    var notesHtml = []
    this.noteList.noteModels.forEach(function(note){
      notesHtml.push("<li><div><a href=#" + note.id + ">" + note.text.substring(0,20) + "</a></div></li>");
    })
    return notesHtml.join("");
  };

  exports.NoteListView = NoteListView;
})(this);
