/*
 * @author: Marta Molina Aguilera
 */
$(document).ready(() => {
  let operacion = "";
  let num1 = 1.0;
  let num2 = 1.0;
  let resultado;

  const enableSegundoCampo = () => {
    $("#segundo-num").removeClass("opacity-dis");
    $("#formGroupExampleInput2").removeAttr("disabled");
  };

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
  const annadirResultado = (resultado) => {
    console.log(resultado);
    $("#muchotexto").text(`Resultado: ${resultado}`);
  };
  const mostrarResultado = () => {
    recogerNums();
    operar();
    annadirResultado(resultado);
    $("#formGroupExampleInput").val("");
    $("#formGroupExampleInput2").val("");
    operacion = "";
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
