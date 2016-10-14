'use strict';

var grid = document.querySelector('#grid');
// var row = document.createElement('div');
// var pixel = document.createElement('div');


 // --- THE GRID ---

var createRow = function(numberOfRows) {
    for (var i = 0; i < numberOfRows; i++) {
      // console.log("test");
        var row = document.createElement('section');
        var numbOfPixels = 70;
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

createRow(25);

 // --- CLICK TO CHANGE BLOCK TO BLACK

var grabPixel = document.querySelectorAll('article');
// console.log(grabPixel);

function fillPixel (event) {
  event.target.style.backgroundColor = 'black';
};

 // --- COLOR PICKER

var colors = document.querySelector('.color')
// console.log(colors);

// var getText =

var getColor = function (event) {
  event.target.id;
  console.log(event.target.id);
}

colors.addEventListener('click', getColor)
