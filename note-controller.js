window.onclick = function() {

  var elem = document.getElementById('app');

  function changeGreeting(text) {
    elem.innerHTML = text;
  }
  changeGreeting("Howdy");
};
