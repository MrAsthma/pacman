canvas = document.getElementById("pacman");
ctx = canvas.getContext("2d");

var img = new Image();
//img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';

img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};
var color = document.getElementById('pacman');
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';

  //color.style.background =  rgba;
  //color.textContent = rgba;
  console.log(rgba);
  if(rgba === "rgba(0, 0, 0, 1)")
  	console.log("black");
}
//canvas.addEventListener('mousemove', pick);