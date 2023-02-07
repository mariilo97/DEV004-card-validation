import validator from './validator.js';

const boton = document.getElementById("miBoton");
boton.addEventListener('click', validate);

function validate() {
  const cardnumber = document.getElementById("cardnumber").value; // capturando valor
  if (cardnumber === "") { // no tiene valor
    //alert("Captura el numero de tu tarjeta")
    document.getElementById("mensaje").textContent = "Captura el Numero de Tarjeta, por favor"
  }
  else {
    valid(cardnumber); // envias el valor a la fn
    // alert("Validando numero...")
    document.getElementById("box-valid").style.display = "none" // ocultas la primer caja
    //mostrar box-result
    document.getElementById("box-result").style.display = "block"// muestras la segunda caja 
  }
}
function valid() {
  const result = validator.isValid(document.getElementById("cardnumber").value);
  const valid = validator.maskify(document.getElementById("cardnumber").value);
  document.getElementById("cardnumber").value = "";
  document.getElementById("result-michi").textContent = valid

  if (result === true) {
    //alert("Tu tarjeta es valida, realiza tu compra ahora")
    document.getElementById("mensajeUno").textContent = "Tu tarjeta es Valida, Puedes Realizar tu Compra Ahora"
  }
  else {
    //alert("Tu tarjeta es invalida, por favor vuelve a intentarlo")
    document.getElementById("mensajeUno").textContent = "Tu Tarjeta es Invalida, Por Favor Vuelve a Intentarlo"
  }
  // document.getElementById("cardnumber").value = valid; 
}

//console.log(validator);
