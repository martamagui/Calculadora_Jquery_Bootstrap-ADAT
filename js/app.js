/*
 * @author: Marta Molina Aguilera
 */
$(document).ready(() => {
  let operacion = "";
  let num1 = 1.0;
  let num2 = 1.0;
  let resultado = 1.0;

  const enableSegundoCampo = () => {
    $("#segundo-num").removeClass("opacity-dis");
    $("#formGroupExampleInput2").removeAttr("disabled");
  };
  const recogerNums = () => {
    if (
      operacion === "sumar" ||
      operacion === "restar" ||
      operacion === "multiplicar" ||
      operacion === "dividir" ||
      operacion === "seno" ||
      operacion === "coseno" ||
      operacion === "tangente" ||
      operacion === "cotangente"
    ) {
      num1 = parseFloat($("#formGroupExampleInput").val());
      num2 = parseFloat($("#formGroupExampleInput2").val());
    } else {
      num1 = parseFloat($("#formGroupExampleInput").val());
    }
  };
  const operar = () => {
    if (operacion === "sumar") {
      resultado = num1 + num2;
    } else if (operacion === "restar") {
      resultado = num1 - num2;
    } else if (operacion === "multiplicar") {
      resultado = num1 * num2;
    } else if (operacion === "dividir") {
      resultado = num1 / num2;
    } else if (operacion === "seno") {
      //-------------------------------------------------Voy por aquí
    } else if (operacion === "coseno") {
    } else if (operacion === "tangente") {
    } else if (operacion === "cotangente") {
    } else if (operacion === "raiz") {
    }
  };
  const annadirResultado = (resultado) => {
    console.log(resultado);
    $("#muchotexto").text(`Resultado: ${resultado}`);
  };

  //Events listeners
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
    operacion = "raiz";
  });

  $("#btnSeno").click(() => {
    operacion = "seno";
    enableSegundoCampo();
  });
  $("#btnCoseno").click(() => {
    operacion = "coseno";
    enableSegundoCampo();
  });
  $("#btnTangente").click(() => {
    operacion = "tangente";
    enableSegundoCampo();
  });
  $("#btnCotangente").click(() => {
    operacion = "cotangente";
    enableSegundoCampo();
  });

  $("#btnIgual").click(() => {
    recogerNums();
    operar();
    annadirResultado(resultado);
    $("#formGroupExampleInput").val("");
    $("#formGroupExampleInput2").val("");
  });
});
