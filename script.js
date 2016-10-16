'use strict';

var grid = document.querySelector('#grid');

 // --- THE GRID ---

var createRow = function(numberOfRows, numbOfPixels) {
    for (var i = 0; i < numberOfRows; i++) {
      // console.log("test");
        var row = document.createElement('section');
        for (var j = 0; j < numbOfPixels; j++) {
            var pixel = document.createElement('article');
            pixel.classList.add('pixelStyle');
            row.appendChild(pixel);
            pixel.addEventListener('click', fillPixel)
        }
        grid.appendChild(row);
    }
    // console.log(row);
}

createRow(25, 60);

 // --- CLICK TO CHANGE BLOCK TO BLACK

// function fillPixel (event) {
//   event.target.style.backgroundColor = 'black';
// };

 // --- COLOR PICKER
var idColor = 'black'
var currentColor = document.querySelector('#currentColor');
currentColor.style.backgroundColor = 'black';

// get into the div color
var colors = document.querySelector('.color')
// console.log(colors);
// ------

// when a color is mousedown on, grab that color using brushColor
colors.addEventListener('mousedown', function (event) {
  if(event.target.id.startsWith('z')){
    var something = event.target.id;
    var somethingB = something.toString();
    // console.log(theID);
    var removeColor = somethingB.slice(1,7);
    idColor = '#' + removeColor;
    currentColor.style.backgroundColor = '#' + removeColor;
  }
  else {
    idColor = '#' + event.target.id;
    currentColor.style.backgroundColor = '#' + event.target.id;
    // console.log(idColor);
    return idColor;

  }
  // idColor = '#' + event.target.id;
  // console.log(idColor);
  // return idColor;
});

// colors.addEventListener('mousedown', function (event) {
//   idColor = '#' + event.target.id;
//   console.log(idColor);
//   return idColor;
// });
// ------

// to fill a pixel with a color
function fillPixel (event) {
    event.target.style.backgroundColor = idColor;
    //makes the border of the pixel the same color as the pixel, so the image can be flush
    event.target.style.borderColor = idColor;
};
