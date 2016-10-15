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

createRow(25, 70);

 // --- CLICK TO CHANGE BLOCK TO BLACK

// function fillPixel (event) {
//   event.target.style.backgroundColor = 'black';
// };

 // --- COLOR PICKER
var idColor = 'black'

  var brushColor = function (event) {
    idColor = '#' + event.target.id;
    console.log(idColor);
    return idColor;
};


// get into the div color
var colors = document.querySelector('.color')
// console.log(colors);
// ------

// when a color is mousedown on, grab that color using brushColor
colors.addEventListener('mousedown', brushColor(event))
// ------

// to fill a pixel with a color
function fillPixel (event) {
    event.target.style.backgroundColor = idColor;
};
