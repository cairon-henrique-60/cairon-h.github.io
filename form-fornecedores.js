window.onload = function () {
  var btn = document.getElementById("btn-action");
  var btn2 = document.getElementById("product-action");

  var container = document.querySelector(".container");
  btn.addEventListener("click", function () {
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });

  var container2 = document.querySelector(".cadastro-produtos");
  btn2.addEventListener("click", function () {
    if (container2.style.display === "block") {
      container2.style.display = "none";
    } else {
      container2.style.display = "block";
    }
  });

  var container = document.querySelector(".container");
  btn.addEventListener("click", function () {
    if (container.style.display === "block") {
      container2.style.display = "none";
    } 
    else {
      container.style.display == "block";
    }
  });

  var container2 = document.querySelector(".cadastro-produtos");
  btn2.addEventListener("click", function () {
    if (container2.style.display === "block") {
      container.style.display = "none";
    } 
    else {
      container2.style.display === "block";
    }
  });
  
};

function mostrar(id) {
  document.getElementById(id).style.display = "block";
}
function fechar(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)

  if(texto.substring(0,1) != saida){
    documento.value += texto.substring(0,1);
  }
}

function validar() {
  Fornecedor = new Object();
  Fornecedor.razaoSocial = document.getElementById("razaoSocial").value;
  Fornecedor.nomeFantasia = document.getElementById("nomeFantasia").value;
  Fornecedor.cnpj = document.getElementById("cnpj").value;
  Fornecedor.cpf = document.getElementById("cpf").value;
  Fornecedor.inEstadual = document.getElementById("inEstadual").value;
  Fornecedor.inMunicipal = document.getElementById("inMunicipal").value;
  Fornecedor.endereco = document.getElementById("endereco").value;
  Fornecedor.cep = document.getElementById("cep").value;
  Fornecedor.cidade = document.getElementById("cidade").value;
  Fornecedor.estado = document.getElementById("estado").value;
  Fornecedor.pais = document.getElementById("pais").value;
  Fornecedor.telefone1 = document.getElementById("telefone1").value;
  Fornecedor.telefone2 = document.getElementById("telefone2").value;
  Fornecedor.email = document.getElementById("email").value;

  return confirm("Cadastro realizado com sucesso!");
}
