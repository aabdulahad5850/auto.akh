const buttons = document.querySelectorAll('button');
buttons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.innerText = 'Loading...';
  });
});