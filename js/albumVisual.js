/* some essential global var */
var nextButton  = document.getElementById("next");
var lastButton  = document.getElementById("last");
var canvas = document.getElementById("album");
var ctext = canvas.getContext("2d");

function onLoadAlbumPhoto(imgData) {
    var imageIn = new Image();

    //imgData = typeof imgData === 'string' ? imgData : "null";
    var img = document.getElementById(imgData);
    ctext.drawImage(img, 10, 10, img.width * 0.2, img.height * 0.2);
    console.log(img.width * 0.7);
}

nextButton.onclick = function () {
    onLoadAlbumPhoto("jb1");
};

document.getElementById('clear').addEventListener('click', function () {
    ctext.clearRect(0, 0, canvas.width, canvas.height);
}, false
    );