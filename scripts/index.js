var acc = document.getElementsByClassName('accordion');
var hamburgerBtn = document.getElementById('hamburgerIcon');
var closeTag = document.getElementById('close-tag');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

function toggleVisibility() {
  if (show) {
    hamburgerBtn.style.display = 'none';
    closeTag.style.display = 'block';
    show = 0;
  } else {
    hamburgerBtn.style.display = 'block';
    closeTag.style.display = 'none';
    show = 1;
  }
}

let show = 1;
hamburgerBtn.addEventListener('click', toggleVisibility);

closeTag.addEventListener('click', toggleVisibility);
