
function myfunction(){
  var x = document.getElementsById('nav');
  if(x.document.getElementsByClassName('info') === 'navmenu'){
     x.document.getElementsByClassName('info')  +='responsive';
  }
  if(x.document.getElementsByClassName('read')==='navmenu'){
    x.document.getElementsByClassName('read') +='responsive';
  }
  if(x.document.getElementsByClassName('about') === 'navmenu'){
    x.document.getElementsByClassName('about') +='responsive';
  }
  else{
    x.document.getElementsByClassName ="navmenu"
  }
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("MyImage");
var modalImg = document.getElementById("img01");
/*var captionText = document.getElementById("caption");*/
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}