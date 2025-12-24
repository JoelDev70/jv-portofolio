

window.addEventListener("load",function(){
  document.getElementById("loader").style.display = "none";

  document.getElementById("bodyContent").style.display = "block";
});


window.onload = function () {
  try {
     TagCanvas.Start('cercleExterne', '', {
     textColour: 'rgba(16, 253, 8, 1)',
      outlineColour: '#f00',
     reverse: true,
     depth: 0.8,
      maxSpeed: 0.05
    });
  } catch(e) {
    console.log("Canvas error", e);
  }
};