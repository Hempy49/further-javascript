(function(exports) {
  function Note(text){
    this.text = text;
    this.id = this.getUniqueId();
  };
  
  var idCount = 0;
  
  Note.prototype.getUniqueId = function () {
    return idCount++;
  };
  
  
  exports.Note = Note;
})(this);
