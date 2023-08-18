var acc = document.getElementsByClassName('accordion');
var hamburgerBtn = document.getElementById('hamburgerIcon');
var closeTag = document.getElementById('close-tag');
var i;
const dropdownBtn = document.getElementById('lang-dropdown-btn');
const dropdownWrapper = document.getElementById('lang-dropdown');
const dropdownTriangle = document.getElementById('lang-dropdown-tri');
let toggleDropdown = 0;

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

function myFunction() {
  console.log('****8');
  window.onscroll = function (ev) {
    console.log('****8');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.getElementByClass('body-center')[0].style.background_color =
        'red';
      document.getElementByClass('body-center')[0].style.opacity = 0;
      console.log('gets heres ?>>>>>>>>');
    }
  };
}

// let screenWidth = window.matchMedia("(min-width: 750px)");
// myFunction();

const element = document.getElementsByClassName('body-center')[0];
let lastScrollTop = 0;
element.onscroll = (e) => {
  if (element.scrollTop < lastScrollTop) {
    // upscroll
    document.getElementById('app-container').style.overflow = 'hidden';
    document.getElementById('bottom-wrapper').style.display = 'none';
    return;
  }
  lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
  if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
    document.getElementById('bottom-wrapper').style.display = 'block';
    document.getElementById('app-container').style.overflow = 'scroll';
  }
};

dropdownBtn.addEventListener('click', () => {
  if (!toggleDropdown) {
    dropdownWrapper.style.display = 'block';
    dropdownTriangle.style.display = 'block';
    toggleDropdown = 1;
  } else {
    dropdownWrapper.style.display = 'none';
    dropdownTriangle.style.display = 'none';
    toggleDropdown = 0;
  }
});
