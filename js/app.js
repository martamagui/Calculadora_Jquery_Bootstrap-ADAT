/*
 * @author: Marta Molina Aguilera
 */

/*Función que se ejecutará al cargar por completo el documento HTML */
$(document).ready(() => {
  /*Declararación de las variables*/
  let operacion = "";
  let num1 = 1.0;
  let num2 = 1.0;
  let resultado = "";

  /* 
  Función que activa el segundo campo si fuera necesario 
  */
  const enableSegundoCampo = () => {
    $("#segundo-num").removeClass("opacity-50");
    $("#formGroupExampleInput2").removeAttr("disabled");
  };

  /*
  Función que desactiva el segundo input de texto y le añade la clase "opacity-dis" la cual baja la opacidad a la mitad
  */
  const disableSegundoCampo = () => {
    $("#segundo-num").addClass("opacity-50");
    $("#formGroupExampleInput2").prop("disabled", true);
  };

  const desactivarBtns = () => {
    $(".btnOperacion").prop("disabled", true);
  };
  const activarBtns = () => {
    $(".btnOperacion").removeAttr("disabled");
  };

  /* 
  Función que toma los valores introducidos en los campos de texto y los convierte en números enteros
   */
  const recogerNums = () => {
    if (
      operacion === "+" ||
      operacion === "-" ||
      operacion === "x" ||
      operacion === ":"
    ) {
      num2 = parseFloat($("#formGroupExampleInput2").val());
    }
    num1 = parseFloat($("#formGroupExampleInput").val());
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      return false;
    } else {
      return true;
    }
  };

  /*
  Ejecuta la operación aritmética oportuna en función de la 
  operación seleccionada, creando un String en la que se muestra esta 
  y su resultado
  */
  const operar = () => {
    if (operacion === "+") {
      resultado = `${num1} + ${num2} = ${num1 + num2}`;
    } else if (operacion === "-") {
      resultado = `${num1} - ${num2} = ${num1 - num2}`;
    } else if (operacion === "x") {
      resultado = `${num1} x ${num2} = ${num1 * num2}`;
    } else if (operacion === ":") {
      resultado = `${num1} : ${num2} = ${num1 / num2}`;
    } else if (operacion === "√") {
      resultado = ` √${num1} : ${Math.sqrt(num1)}`;
    } else if (operacion === "Seno") {
      resultado = ` Seno de ${num1} : ${Math.sin(num1)}`;
    } else if (operacion === "Coseno") {
      resultado = ` Coseno de ${num1} : ${Math.cos(num1)}`;
    } else if (operacion === "Tangente") {
      resultado = ` Tangente de ${num1} : ${Math.tan(num1)}`;
    } else {
      resultado = ` Cotangente de ${num1}: ${1 / Math.tan(num1)}`;
    }
  };

  /*
  Añade el reultado al párrafo que se encuentra debajo de la calculadora
   */
  const annadirResultado = (resultado) => {
    $("#muchotexto").text(resultado);
  };

  /*
  Añade la operación al historial
   */
  const appenAlHistorial = () => {
    $("#historial").prepend(`${resultado}<br>`);
  };

  /*
  Función la cual llama a las anteriores funciones nombradas:
    recogerNums();
    operar();
    annadirResultado(resultado);
  Seguidamente, resetea los valores introducidos en los campos de texto.
  Puede ser llamada desde el botón de igual o el botón de: raíz, seno, coseno, tangente y cotangente
  Vuelve a bloquear el segundo campo de texto.
  */
  const mostrarResultado = () => {
    let seguir = recogerNums();
    if (seguir && operacion != "") {
      operar();
      annadirResultado(resultado);
      $("#formGroupExampleInput").val("");
      $("#formGroupExampleInput2").val("");
      appenAlHistorial();
    } else {
      annadirResultado("Datos no válidos");
      $("#formGroupExampleInput").val("Dato no válido");
      $("#formGroupExampleInput2").val("");
    }
    disableSegundoCampo();
    operacion = "";
  };

  // ------------- EVENTS LISTENERS -------------

  /*Escucha cuando se pulsa "btnSumar" del DOM y cambia la operación al valor "+", activa el segundo campo */
  $("#btnSumar").click(() => {
    operacion = "+";
    enableSegundoCampo();
    desactivarBtns();
  });
  /*Escucha cuando se pulsa "btnRestar" del DOM y cambia la operación a "-", activa el segundo campo */
  $("#btnRestar").click(() => {
    operacion = "-";
    enableSegundoCampo();
    desactivarBtns();
  });

  /*Escucha cuando se pulsa "btnMultiplicar" del DOM y cambia la operación a "x", activa el segundo campo */
  $("#btnMultiplicar").click(() => {
    operacion = "x";
    enableSegundoCampo();
    desactivarBtns();
  });

  /*Escucha cuando se pulsa "btnDividir" del DOM y cambia la operación a ":", activa el segundo campo */
  $("#btnDividir").click(() => {
    operacion = ":";
    enableSegundoCampo();
    desactivarBtns();
  });

  /*Escucha cuando se pulsa "btnRaiz" del DOM y cambia la operación a "√", llama a mostrarResultado() */
  $("#btnRaiz").click(() => {
    operacion = "√";
    mostrarResultado();
  });

  /*Escucha cuando se pulsa "btnSeno" del DOM y cambia la operación a "Seno:" , llama a mostrarResultado() */
  $("#btnSeno").click(() => {
    operacion = "Seno";
    mostrarResultado();
  });

  /*Escucha cuando se pulsa "btnCoseno" del DOM y cambia la operación a "Coseno:", llama a mostrarResultado() */
  $("#btnCoseno").click(() => {
    operacion = "Coseno";
    mostrarResultado();
  });

  /*Escucha cuando se pulsa "btnTan" y cambia la operación a "Tangente:", llama a mostrarResultado() */
  $("#btnTan").click(() => {
    operacion = "Tangente";
    mostrarResultado();
  });

  /*Escucha cuando se pulsa "btnCotangente" y cambia la operación a "Cotangente:", llama a mostrarResultado() */
  $("#btnCotangente").click(() => {
    operacion = "Cotangente";
    mostrarResultado();
  });

  /*Escucha cuando se pulsa "btnIgual", llama a mostrarResultado() */
  $("#btnIgual").click(() => {
    mostrarResultado();
    activarBtns();
  });
});
