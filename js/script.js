var bodyElement = document.body.lastChild;
var paragraphText = bodyElement.firstChild.nextElementSibling.firstChild.nextElementSibling.lastChild.previousElementSibling;
var subheading = document.getElementsByClassName('subheading');
var paragraph = document.getElementsByClassName('paragraph');
var clickCounter = 0;
var headerHoverCounter = 0;
var footerHoverCounter = 0;
var headGrab = document.getElementById('head');
var footGrab = document.getElementById('foot');

  document.getElementById('link').addEventListener('click', function (e) {
    e.preventDefault();
    for (var i = 0, col = subheading.length; i < col; i++) {
      subheading[i].style.color = 'red';
    }
    paragraphText.innerHTML = 'Lorem Ipsum Rocks';
  });

  for (var i = 0, par = paragraph.length; i < par; i++) {
    paragraph[i].addEventListener('click', function () {
      clickCounter++;
      if (clickCounter === 1) {
        console.log('Paragraph text has been clicked once!' );
      } else {
        console.log('Paragraph text has been clicked ' + clickCounter + ' times!');
      }
    });
  }

  headGrab.addEventListener('mouseover', function () {
    headerHoverCounter++;
    if(headerHoverCounter < 2) {
      console.log('Header has been hovered over once!');
    } else {
      console.log('Header has been hovered over ' + headerHoverCounter + ' times!');
    }
  });

  footGrab.addEventListener('mouseover', function() {
    footerHoverCounter++;
    if (footerHoverCounter < 2) {
      console.log('Footer has been hovered over once!');
    } else {
      console.log('Footer has been hovered over ' + footerHoverCounter + ' times!');
    }
  });
