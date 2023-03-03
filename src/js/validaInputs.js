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

const numeroCasa = document.getElementById("numero");

numeroCasa.addEventListener("input", function () {
  let numero = numeroCasa.value;

  numero = numero.replace(/\D/g, ""); 

  numero = numero.replace(/^(\d{4})$/, "$1");

  numeroCasa.value = numero;

  const numeroCasaRegex = /^[0-9]{1,4}$/;
})
