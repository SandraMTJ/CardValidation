/* eslint-disable no-console */
import validator from './validator.js';

//En cuanto usuario da click a boton se activa función validate
function validate() {
    
  const numTarjeta = document.getElementById('numTarjeta').value;//Variable que llama valor id del input 'numTarjeta'
  const valid = validator.isValid(numTarjeta);// Se crea variable 'valid' que llama al método 'isValid' de objeto validador, para pasar # de tarjeta obtenido y devolver valor booleano

  //Se crea condicional, si variable 'valid' es true, se ejecuta acción o sino ('else')
  if (valid){
    document.getElementById('mensajeValido').innerHTML = 'Tarjeta válida';
  } else {
    document.getElementById('mensajeValido').innerHTML = 'Número de tarjeta inválido';
  }}
  
// Obtener referencia al botón y al Mensaje de resultado
const btnEnmascaramiento = document.getElementById('btnValidar'); //Variable 'btnEnmascaramiento' para llamar id de boton ('btnValidar')
const numTarjetaInput = document.getElementById('numTarjeta');
const resultado = document.getElementById('resultado'); //Variable 'resultado' para llamar id de elemento ('resultado')
  
const btnValidar = document.getElementById('btnValidar'); //Variable 'btnValidar' para llamar id de boton ('btnValidar')
btnValidar.addEventListener('click', validate); //Se agrega evento al boton para que al dar click active función 'validate'
  
/*Se agrega evento al boton con variable creada 'btnEnmascaramiento'para que al dar click active función especifica, se crea variable 'numEnmascarado' para llamar 
al método 'maskify' de objeto 'validator' y ejecuta la condicional*/

btnEnmascaramiento.addEventListener('click', function () { 
  const numTarjeta = numTarjetaInput.value;
  //Se llama la función maskify para ocultar los caracteres del número de tarjeta, excepto los últimos cuatro, El resultado se asigna a la variable numEnmascarado.
  const numEnmascarado = validator.maskify(numTarjeta); 
  if (numEnmascarado === 'Número inválido') {
    resultado.innerHTML = 'Número inválido';
  } else {
    resultado.innerHTML = numEnmascarado;
  }
});

//Función para que solo permita números y no letras o caracteres especiales
const campoInput = document.getElementById("numTarjeta");
const mensajeError = document.getElementById("mensajeError");

campoInput.addEventListener("input", () => { //El evento "input" se dispara cada vez que el usuario ingresa texto en el campo de entrada
  if (campoInput.validity.patternMismatch) { //Se verifica si el valor actual del campo de entrada no coincide con el patrón especificado en el atributo 'pattern' del campo de entrada. En este caso, el patrón debe permitir solo caracteres numéricos. Si el valor actual del campo de entrada no coincide con el patrón, la condición del if se evalúa como true
    mensajeError.textContent = "Solo se permiten números";
  } else {
    mensajeError.textContent = "";
  }
});
  

console.log(validator);
