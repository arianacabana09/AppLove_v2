var modal = document.getElementById('myModal');

// Obtener la imagen e insertarla dentro del modal
var img = document.getElementById('work-1');
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// x del model
var span = document.getElementsByClassName("close")[0];

//cerrar el model
span.onclick = function() {
    modal.style.display = "none";
}
