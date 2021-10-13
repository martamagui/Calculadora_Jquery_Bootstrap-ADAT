/*
 * @author: Marta Molina Aguilera
 */

/*Función que se ejecutará al cargar por completo el documento HTML */
$(document).ready(() => {
  /*Declararación de las variables*/
  let operacion = "";
  let num1 = 1.0;
  let num2 = 1.0;
  let resultado;

  /* 
  Función que activa el segundo campo si fuera necesario 
  */
  const enableSegundoCampo = () => {
    $("#segundo-num").removeClass("opacity-dis");
    $("#formGroupExampleInput2").removeAttr("disabled");
  };

  /* 
  Función que toma los valores introducidos en los campos de texto y los convierte en números enteros
   */
  const recogerNums = () => {
    if (
      operacion === "sumar" ||
      operacion === "restar" ||
      operacion === "multiplicar" ||
      operacion === "dividir"
    ) {
      num1 = parseFloat($("#formGroupExampleInput").val());
      num2 = parseFloat($("#formGroupExampleInput2").val());
    } else {
      num1 = parseFloat($("#formGroupExampleInput").val());
    }
  };

  /*
  Ejecuta la operación oportuna en función de la operación seleccionada.
  */
  const operar = () => {
    if (operacion === "sumar") {
      resultado = num1 + num2;
    } else if (operacion === "restar") {
      resultado = num1 - num2;
    } else if (operacion === "multiplicar") {
      resultado = num1 * num2;
    } else if (operacion === "dividir") {
      resultado = num1 / num2;
    } else {
    }
  };
  /*
  Añade el reultado al párrafo que se encuentra debajo de la calculadora
   */
  const annadirResultado = (resultado) => {
    console.log(resultado);
    $("#muchotexto").text(`Resultado: ${resultado}`);
  };


  /*
  Función la cual llama a las anteriores funciones nombradas:
    recogerNums();
    operar();
    annadirResultado(resultado);
  Seguidamente, resetea los valores introducidos en los campos de texto.
  Puede ser llamada desde el botón de igual o el botón de: raíz, seno, coseno, tangente y cotangente
  */
  const mostrarResultado = () => {
    recogerNums();
    operar();
    annadirResultado(resultado);
    $("#formGroupExampleInput").val("");
    $("#formGroupExampleInput2").val("");
    operacion = "";
  };

  // ------------- EVENTS LISTENERS -------------
  /* */
  $("#btnSumar").click(() => {
    operacion = "sumar";
    enableSegundoCampo();
  });

  $("#btnRestar").click(() => {
    operacion = "restar";
    enableSegundoCampo();
  });
  $("#btnMultiplicar").click(() => {
    operacion = "multiplicar";
    enableSegundoCampo();
  });
  $("#btnDividir").click(() => {
    operacion = "dividir";
    enableSegundoCampo();
  });
  $("#btnRaiz").click(() => {
    resultado = ` Raíz: ${Math.sqrt(num1)}`;
    mostrarResultado();
  });

  $("#btnSeno").click(() => {
    resultado = ` Seno: ${Math.sin(num1)}`;
    mostrarResultado();
  });
  $("#btnCoseno").click(() => {
    resultado = ` Coseno: ${Math.cos(num1)}`;
    mostrarResultado();
  });
  $("#btnTan").click(() => {
    resultado = ` Tangente: ${Math.tan(num1)}`;
    mostrarResultado();
  });
  $("#btnCotangente").click(() => {
    resultado = ` Cotangente: ${1 / Math.tan(num1)}`;
    mostrarResultado();
  });

  $("#btnIgual").click(() => {
    mostrarResultado();
  });
});
