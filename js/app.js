/*
 * @author: Marta Molina Aguilera
 */
$(document).ready(() => {
  let simbolo = "";
  let num1 = 1.0;
  let num2 = 1.0;
  let resultado = 1.0;

  const enableSegundoCampo = () => {
    $("#segundo-num").removeClass("opacity-dis");
    $("#formGroupExampleInput2").removeAttr("disabled");
  };
  const recogernum1 = () => {
    num1 = parseInt($("#formGroupExampleInput").val());
  };
  const recogernum2 = () => {
    num2 = parseInt($("#formGroupExampleInput2").val());
  };

  $("#btnSumar").click(() => {
    enableSegundoCampo();
  });
  $("#btnRestar").click(() => {
    enableSegundoCampo();
  });
  $("#btnDividir").click(() => {
    enableSegundoCampo();
  });

  $("#btnMultiplicar").click(() => {
    enableSegundoCampo();
  });

  $("#btnIgual").click(() => {
    recogernum1();
    recogernum2();
    resultado = num1 + num2;
    console.log(resultado);
    $("#muchotexto").text(`Resultado: ${resultado}`);
  });
});
