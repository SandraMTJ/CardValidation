const validator = {
  isValid: function(numTarjeta) {
    {
      const reversar = numTarjeta.toString().split("").reverse(); //Se convierte a cadena de caracteres, se invierte y se separa
      let total = 0; // Calcula la suma de los dígitos de la tarjeta de crédito y se almacena en variable

    
      //Bucle del Algoritmo de Luhn
      for (let i = 0; i < reversar.length; i++) {  //'reversar.length' Captura la cantidad de digitos del número ingresado
        let num = parseInt(reversar[i]); // Variable 'num' para almacenar conversión de digito a número entero con 'parseInt'
        if (i % 2 === 1) { // Verifica si el digito es número impar para continuar con la condicional if
          num *= 2; // Si el digito es impar, se multiplica valor de 'num'por 2
          if (num > 9) {
            num -= 9;// Si el valor de 'num' despues de la multiplicación es mayor que 9, se resta 9
          }
        }
        total += num; // El valor de 'num' luego de las operaciones se agrega a 'total' que es la suma de los digitos procesados en el bucle
      }
      if (total % 10 === 0) { // Se verifica si 'total' es divisible por 10 sin dejar residuo
        return true; // Si es multiplo de 10 el número es válido (true)
      } else {
        return false; // Si no es multiplo de 10 el número es inválido (false)
      }
    }
  },
  //Ocultar los dígitos del número menos los últimos 4
  maskify: function(numTarjeta) { //La función maskify toma el argumento 'numTarjeta'
    
    let numEnmascarado = ""; //Se toma variable 'numEnmascarado' como cadena de texto vacía, que se usará para almacenar los primeros dígitos del número ingresado
    const cuatroDigitos = numTarjeta.slice(-4); //Se extraen los últimos cuatro dígitos con el método slice(-4) devolviendo los ultimos 4 caracteres 
    
    //Se utiliza un bucle 'for' para recorrer los dígitos de la tarjeta de crédito desde el primer dígito hasta el cuarto dígito desde el final. En cada iteración del bucle, se añade un carácter "#" a la cadena numEnmascarado.
    for (let i = 0; i < numTarjeta.length - 4; i++) {
      i < numTarjeta.length - 4 
      numEnmascarado += "#"; 
    }
    return numEnmascarado + cuatroDigitos; //Se concatenan los números ocultos y los 4 que quedan visibles
  },

};


export default validator;
