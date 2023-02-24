/* eslint-disable no-console */
import validator from './validator.js';

//En cuanto usuario da click a boton se activa función validate
function validate() {

  const campoInput = document.getElementById("numTarjeta");

  // Se verifica si el valor del (input) está vacio. Si es así, se muestra un mensaje de error al usuario en el elemento con el id "mensajeError".
  if (campoInput.value === "") {
    document.getElementById('mensajeError').innerHTML = "Debe digitar un número";
    //Si el (input) no está vacio, se verifica si el valor del campo es válido utilizando el método checkValidity(). Si no es válido, se muestra un mensaje de error y se restablece el valor del campo a una cadena vacía.
  } else if (!campoInput.checkValidity()) {
    document.getElementById('mensajeValido').innerHTML = 'Número de tarjeta inválido';
    document.getElementById('mensajeError').innerHTML = "Campo inválido";
    campoInput.value = "";
  } else { //Si el valor del (input) es válido, se ejecuta el siguiente bloque de código
    const valid = validator.isValid(campoInput.value);
    if (valid){
      document.getElementById('mensajeValido').innerHTML = 'Tarjeta válida';
    } else {
      document.getElementById('mensajeValido').innerHTML = 'Número de tarjeta inválido';
    }
    enmascarar();
  }
}

function enmascarar() {

  document.getElementById('mensajeError').innerHTML = ""; //Si el valor del (input) es válido, se establece el mensaje de error en blanco en el elemento con el id "mensajeError".
  const numTarjeta = numTarjetaInput.value;
  //Se llama la función maskify para ocultar los caracteres del número de tarjeta, excepto los últimos cuatro, El resultado se asigna a la variable numEnmascarado.
  const numEnmascarado = validator.maskify(numTarjeta);
  if (numEnmascarado === 'Número de tarjeta inválido') {
    resultado.innerHTML = 'Número de tarjeta inválido';
  } else {
    resultado.innerHTML = numEnmascarado;
  }

  console.log(campoInput.value)
}

// Obtener referencia al botón y al Mensaje de resultado
const numTarjetaInput = document.getElementById('numTarjeta');
const resultado = document.getElementById('resultado'); //Variable 'resultado' para llamar id de elemento ('resultado')

const btnValidar = document.getElementById('btnValidar'); //Variable 'btnValidar' para llamar id de boton ('btnValidar')
btnValidar.addEventListener('click', validate); //Se agrega evento al boton para que al dar click active función 'validate'

//Función para que solo permita números y no letras o caracteres especiales
const campoInput = document.getElementById("numTarjeta");
const mensajeError = document.getElementById("mensajeError");
const mensajeValidonull = document.getElementById('mensajeValido');

campoInput.addEventListener("input", () => { //El evento "input" se dispara cada vez que el usuario ingresa texto en el campo de entrada
  if (campoInput.validity.patternMismatch) { //Se verifica si el valor actual del campo de entrada no coincide con el patrón especificado en el atributo 'pattern' del campo de entrada. En este caso, el patrón debe permitir solo caracteres numéricos. Si el valor actual del campo de entrada no coincide con el patrón, la condición del if se evalúa como true
    mensajeError.textContent = "Solo se permiten números";
    document.getElementById("numTarjeta").value = "";
  } else {
    mensajeError.textContent = "";
    mensajeValidonull.textContent = "";
  }
});

console.log(validator);
