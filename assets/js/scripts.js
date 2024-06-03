let cantidad;
let total;
let precio = 400000; // Aquí puedes poner el precio base que quieras

window.onload = function() {
  cantidad = document.querySelector('.cantidad');
  total = document.querySelector('.valor-total');
  
  document.querySelector('.precio-inicial').innerHTML = precio;
}

function aumentar() {
  let valorActual = Number(cantidad.innerHTML);
  valorActual++;
  cantidad.innerHTML = valorActual;
  total.innerHTML = valorActual * precio;
}

function disminuir() {
  let valorActual = Number(cantidad.innerHTML);
  if (valorActual > 0) {
    valorActual--;
    cantidad.innerHTML = valorActual;
    total.innerHTML = valorActual * precio;
  }
}