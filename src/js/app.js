// selecione o campo de CPF
const cpfField = document.getElementById("cpf");

// adicione um evento de input ao campo
cpfField.addEventListener("input", function () {
  // recupere o valor atual do campo
  let cpf = cpfField.value;

  // remove tudo o que não é dígito
  cpf = cpf.replace(/\D/g, "");

  // aplica a máscara
  cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

  // atualiza o valor do campo
  cpfField.value = cpf;

  // defina a expressão regular para validar o CPF
  const cpfRegex = /^([0-9]{14})|([0-9]{11})$/;

  // verifique se o valor do CPF corresponde à expressão regular
  //if (!cpfRegex.test(cpf)) {
    // se o valor do CPF for inválido, defina a classe 'is-invalid' para o campo
    //cpfField.classList.add("is-invalid");
  //} else {
    // caso contrário, remova a classe 'is-invalid' do campo
    //cpfField.classList.remove("is-invalid");
  //}
});

//Aplica Mascaras nos Inputs
$(document).ready(function () {
  $(".datanascimento").mask("0000-00-00", {
      translation: {
          0: {
              pattern: /[0-9]/,
          },
      },
      pattern:
          /^[0-9]{4}-(1[0-2]{1}|0[0-9]{1})-([0-2]{1}[0-9]{1}|3[0-1]{1})/,
  });
  $(".numerotelefone").mask("(00) 00000-0000", {
      translation: {
          0: {
              pattern: /^[0-9]{1,2}/,
          },
      },
  });
});

// Etapa -3 Adiciona paramêtros da Cobertura de Incêndio
$(document).ready(function () {
  var slider = document.getElementById("slider-cobertura");
  var valueField = document.getElementById("valorcoberturaincendio");

  noUiSlider.create(slider, {
      start: [30000],
      range: {
          min: [10000],
          max: [1000000000],
      },
      step: 1000,
      format: {
          to: function (value) {
              return parseInt(value);
          },
          from: function (value) {
              return parseInt(value);
          },
      },
  });

  slider.noUiSlider.on("update", function (values, handle) {
      valueField.value =
          "R$ " +
          parseInt(values[handle]).toLocaleString("pt-br", {
              minimumFractionDigits: 2,
          });
  });
});
