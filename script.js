'use strict';

var grid = document.querySelector('#grid');
// var row = document.createElement('div');
// var pixel = document.createElement('div');

var createRow = function(numberOfRows) {
    for (var i = 0; i < numberOfRows; i++) {
      // console.log("test");
        var row = document.createElement('section');
        var numbOfBlocks = 70;
        for (var j = 0; j < numbOfBlocks; j++) {
            var pixel = document.createElement('article');
            pixel.classList.add('pixelStyle');
            row.appendChild(pixel);
        }
        grid.appendChild(row);
    }
    console.log(row);
}

createRow(20);
