var acc = document.getElementsByClassName('accordion');
var hamburgerBtn = document.getElementById('hamburgerIcon');
var closeTag = document.getElementById('close-tag');
var i;
const dropdownBtn = document.getElementById('lang-dropdown-btn');
const dropdownWrapper = document.getElementById('lang-dropdown');
const dropdownTriangle = document.getElementById('lang-dropdown-tri');
const searchIcon = document.getElementsByClassName('nav-logo-search')[0];
const searchInput = document.getElementsByClassName('search-input')[0];
const arrDownBtn = document.getElementsByClassName('arrImg')[0];
const bottomModalDiv = document.getElementsByClassName('bottom-modal-div')[0];
const modalBtn = document.getElementById('toggleModalBtn');
const headerBtn = document.getElementById('header-btn');
const headerBtn2 = document.getElementById('header-btn-2');

let toggleDropdown = 0;
let show = 1;
let toggleInputVisibity = 0;
let toggleBottomModal = 0;

for (i = 0; i < acc.length; i++) {
  const accordionTitle = acc[i].getElementsByClassName('accordion-title')[0];
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      if (accordionTitle) accordionTitle.style.marginBottom = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      if (accordionTitle) accordionTitle.style.marginBottom = '25px';
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

hamburgerBtn.addEventListener('click', toggleVisibility);

closeTag.addEventListener('click', toggleVisibility);

function myFunction() {
  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.getElementByClass('body-center')[0].style.background_color =
        'red';
      document.getElementByClass('body-center')[0].style.opacity = 0;
    }
  };
}

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
    searchInput.style.display = 'none';
    toggleInputVisibity = 0;
  } else {
    dropdownWrapper.style.display = 'none';
    dropdownTriangle.style.display = 'none';
    toggleDropdown = 0;
  }
});

searchIcon.addEventListener('click', () => {
  if (!toggleInputVisibity) {
    searchInput.style.display = 'inline';
    toggleInputVisibity = 1;
    dropdownWrapper.style.display = 'none';
    dropdownTriangle.style.display = 'none';
    toggleDropdown = 0;
  } else {
    searchInput.style.display = 'none';
    toggleInputVisibity = 0;
  }
});

arrDownBtn.addEventListener('click', () => {
  if (toggleBottomModal) {
    bottomModalDiv.style.display = 'none';
    toggleBottomModal = 0;
  }
});

modalBtn.addEventListener('click', () => {
  if (!toggleBottomModal) {
    bottomModalDiv.style.display = 'inline';
    toggleBottomModal = 1;
  } else {
    bottomModalDiv.style.display = 'none';
    toggleBottomModal = 0;
  }
});

headerBtn.addEventListener('click', () => {
  if (headerBtn.classList.contains('btn-primary')) {
    headerBtn.innerHTML = '3 | משרות מי שבע';
    headerBtn.classList.add('btn-primary-outline');
    headerBtn.classList.remove('btn-primary');
  } else {
    headerBtn.innerHTML = '18 | קבלנים ונותני שירות';
    headerBtn.classList.remove('btn-primary-outline');
    headerBtn.classList.add('btn-primary');
  }
});

headerBtn2.addEventListener('click', () => {
  if (headerBtn2.classList.contains('btn-primary')) {
    headerBtn2.innerHTML = '45 | כל הנושאים';
    headerBtn2.classList.add('btn-primary-outline');
    headerBtn2.classList.remove('btn-primary');
  } else {
    headerBtn2.innerHTML = '4 | מכרזי בכירים';
    headerBtn2.classList.remove('btn-primary-outline');
    headerBtn2.classList.add('btn-primary');
  }
});
