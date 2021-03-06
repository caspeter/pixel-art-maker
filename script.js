'use strict';

// --- THE GRID ---
var grid = document.querySelector('#grid');
var painting = false;

var createRow = function(numberOfRows, numbOfPixels) {
    for (var i = 0; i < numberOfRows; i++) {
        // console.log("test");
        var row = document.createElement('section');
        for (var j = 0; j < numbOfPixels; j++) {
            var pixel = document.createElement('article');
            pixel.classList.add('pixelStyle');
            row.appendChild(pixel);
            // pixel.addEventListener('click', fillPixel);
            // testing mousedown and mouseover
            pixel.addEventListener('mousedown', function(event) {
                event.target.style.backgroundColor = idColor;
                event.target.style.borderColor = idColor;
                painting = true;
            });
            pixel.addEventListener('mouseover', fillPixel);
            pixel.addEventListener('mouseup', function(event) {
                painting = false;
            });
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
colors.addEventListener('mousedown', function(event) {
    if (event.target.id.startsWith('z')) {
        var something = event.target.id;
        var somethingB = something.toString();
        // console.log(theID);
        var removeColor = somethingB.slice(1, 7);
        idColor = '#' + removeColor;
        //changes the current color container to be the color selected
        currentColor.style.backgroundColor = '#' + removeColor;
    } else {
        idColor = '#' + event.target.id;
        //changes the current color container to be the color selected
        currentColor.style.backgroundColor = '#' + event.target.id;
        // console.log(idColor);
        return idColor;
    }
});

// ------

// to fill a pixel with a color
function fillPixel(event) {
    if (painting === true) {
        event.target.style.backgroundColor = idColor;
        //makes the border of the pixel the same color as the pixel, so the image can be flush
        event.target.style.borderColor = idColor;
    }
};

// OWN COLOR PICKER

var ownColor = document.querySelector('#customColorInput1');
var submitColor = document.querySelector('#setColor');

submitColor.addEventListener('click', function () {
  var colorValue = ownColor.value
  console.log(colorValue);
  idColor = colorValue;
  currentColor.style.backgroundColor = colorValue;
})

// ERASER
// function eraser() {
//     event.target.style.backgroundColor = '';
//     event.target.style.borderColor = '#D9D6CF';
// }
