$(document).ready(function () {
  // Ao clicar em "Próxima etapa"
  $(".next-step").click(function () {
      var currentStep = $(this).closest(".form-step");
      var nextStep = currentStep.next(".form-step");
      currentStep.hide();
      nextStep.show();
  });

  // Ao clicar em "Etapa anterior"
  $(".prev-step").click(function () {
      var currentStep = $(this).closest(".form-step");
      var prevStep = currentStep.prev(".form-step");
      currentStep.hide();
      prevStep.show();
  });
});

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

//Função que traduz o DatePicker e converte para o formato internacional.
$(function() {
  $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
  $("#datanascimento").datepicker({
      dateFormat: 'dd/mm/yy', // Define o formato da data
      changeMonth: true, // Permite a mudança do mês
      changeYear: true, // Permite a mudança do ano
      yearRange: '-100:+0', // Define o range de anos
      maxDate: new Date(), // Define a data máxima como a data atual
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], // Define os nomes dos dias da semana
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'], // Define os nomes abreviados dos dias da semana
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], // Define os nomes dos meses
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], // Define os nomes abreviados dos meses
      onSelect: function() {
          var date = $(this).datepicker('getDate');
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;
          $(this).val(formattedDate);
      }
  });
});
