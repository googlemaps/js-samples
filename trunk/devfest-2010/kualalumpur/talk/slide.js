var currentSlideNo;

function initialize() {
  currentSlideNo = 1;
  document.body.addEventListener('keydown', handleBodyKeyDown, false);
  var els = document.getElementsByTagName('slide');
  for (var i = 0, el; el = els[i]; i++) {
    el.className = 'far-future';
  }
  updateSlideClasses();
}

function getSlideEl(slideNo) {
  if (slideNo > 0) {
    return document.getElementsByTagName('slide')[slideNo - 1];
  } else {
    return null;
  }
}

function getSlideTitle(slideNo) {
  var el = getSlideEl(slideNo);

  if (el) {
    return el.getElementsByTagName('header')[0].innerHTML;
  } else {
    return null;
  }
}

function changeSlideElClass(slideNo, className) {
  var el = getSlideEl(slideNo);

  if (el) {
    el.className = className;
  }
}

function updateSlideClasses() {
  changeSlideElClass(currentSlideNo - 2, 'far-past');
  changeSlideElClass(currentSlideNo - 1, 'past');
  changeSlideElClass(currentSlideNo, 'current');
  changeSlideElClass(currentSlideNo + 1, 'future');
  changeSlideElClass(currentSlideNo + 2, 'far-future');
}

function nextSlide() {
  if (currentSlideNo < document.getElementsByTagName('slide').length) {
    currentSlideNo++;
  }
  updateSlideClasses();
}

function prevSlide() {
  if (currentSlideNo > 1) {
    currentSlideNo--;
  }
  updateSlideClasses();
}

function switch3D() {
  if (document.body.className.indexOf('three-d') == -1) {
    document.getElementsByTagName('presentation')[0].style.webkitPerspective = '1000px';

    document.body.className += ' three-d';
  } else {
    window.setTimeout("document.getElementsByTagName('presentation')[0].style.webkitPerspective = '0';", 2000);
    document.body.className = document.body.className.replace(/three-d/, '');
  }
}

function handleBodyKeyDown(e) {
  switch (e.keyCode) {
    case 37: // left arrow
      prevSlide();
      break;
    case 39: // right arrow
    case 32: // space
      nextSlide();
      break;
    case 40:
      nextSubSection();
      break;
    case 51: // 3
      switch3D();
      break;
  }
}

function nextSubSection() {
  var slide = getSlideEl(currentSlideNo);
  var next = slide.getElementsByClassName('to-show');
  if (next.length) {
    next = next[0];
    next.className = next.className.replace('to-show', 'show');
  }
}

//initialize();
