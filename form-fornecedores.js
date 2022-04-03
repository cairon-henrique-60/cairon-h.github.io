window.onload = function () {
  var btn = document.getElementById("btn-action2");
  var btn2 = document.getElementById("product-action2");
  var btn3 = document.getElementById("btn-action");
  var btn4 = document.getElementById("product-action");
  var btn5 = document.getElementById("botaoPessoaJ");
  var btn6 = document.getElementById("botaoPessoaF");
  var btn7 = document.getElementById("botaoClientePJ");
  var btn8 = document.getElementById("botaoClientePF");
  var btn9 = document.getElementById("btn-clientes");
  var btn10 = document.getElementById("btn-transportadoras");
  var btn11 = document.getElementById("botaoTransportadorasPJ");
  var btn12 = document.getElementById("botaoTransportadorasPF");

  var container3 = document.querySelector(".cadastroFornecedorPF");
  var container5 = document.querySelector(".cadastroFornecedorPJ");
  var containerClientesPF = document.querySelector(".cadastroClientesPF");
  var containerClientesPJ = document.querySelector(".cadastroClientesPJ");
  var containerTransportadorasPF = document.querySelector(".cadastroTransportadorasPF");
  var containerTransportadorasPJ = document.querySelector(".cadastroTransportadorasPJ");

  btn10.addEventListener("click", function () {
    if (containerTransportadorasPF.style.display === "block") {
      containerTransportadorasPF.style.display = "none";
    } else {
      containerTransportadorasPF.style.display = "block";
      
    }
  });

  btn11.addEventListener("click", function () {
    if (containerTransportadorasPJ.style.display === "none") {
      containerTransportadorasPJ.style.display = "block";
      containerTransportadorasPF.style.display = 'none';
    }else {
      containerTransportadorasPJ.style.display = "none";
    }
  });

  btn12.addEventListener("click", function () {
    if (containerTransportadorasPF.style.display === "none") {
      containerTransportadorasPF.style.display = "block";
      containerTransportadorasPJ.style.display = 'none';
    }
  });
  btn9.addEventListener("click", function () {
    if (containerClientesPF.style.display === "block") {
      containerClientesPF.style.display = "none";
    } else {
      containerClientesPF.style.display = "block";
      
    }
  });

  btn7.addEventListener("click", function () {
    if (containerClientesPJ.style.display === "none") {
      containerClientesPJ.style.display = "block";
      containerClientesPF.style.display = 'none';
    }else {
      containerClientesPJ.style.display = "none";
    }
  });

  btn8.addEventListener("click", function () {
    if (containerClientesPF.style.display === "none") {
      containerClientesPF.style.display = "block";
      containerClientesPJ.style.display = 'none';
    }
  });

  btn3.addEventListener("click", function () {
    if (container3.style.display === "block") {
      container3.style.display = "none";
    } else {
      container3.style.display = "block";
      
    }
  });

  btn5.addEventListener("click", function () {
    if (container5.style.display === "none") {
      container5.style.display = "block";
      container3.style.display = 'none';
    }else {
      container5.style.display = "none";
    }
  });

  var container6 = document.querySelector(".cadastroFornecedorPF");
  btn6.addEventListener("click", function () {
    if (container6.style.display === "none") {
      container6.style.display = "block";
      container5.style.display = 'none';
    }
  });

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


  var container4 = document.querySelector(".cadastroProdutos");
  btn4.addEventListener("click", function () {
    if (container4.style.display === "block") {
      container4.style.display = "none";
    } else {
      container4.style.display = "block";
    }
  });

  var container4 = document.querySelector(".cadastroProdutos");
  btn4.addEventListener("click", function () {
    if (container4.style.display === "block") {
      container3.style.display = "none";
    } 
    else {
      container4.style.display === "block";
    }
  });
  
};

// function sumir(pesquisaFornecedor) {
//   document.getElementById(pesquisaFornecedor).style.display = "none";
// }

function mostrar(paginaTransportadoras) {
  document.getElementById(paginaTransportadoras).style.display = "block";
}
function sumir(paginaTransportadoras) {
  document.getElementById(paginaTransportadoras).style.display = "none";
}
function mostrar(paginaClientes) {
  document.getElementById(paginaClientes).style.display = "block";
}
function sumir(paginaClientes) {
  document.getElementById(paginaClientes).style.display = "none";
}
function sumir(paginaProdutos) {
  document.getElementById(paginaProdutos).style.display = "none";
}
function sumir(paginaFornecedores) {
  document.getElementById(paginaFornecedores).style.display = "none";
}
function mostrar(paginaFornecedores) {
  document.getElementById(paginaFornecedores).style.display = "block";
}

function sumir(logotipo) {
  document.getElementById(logotipo).style.display = "none";
}
function fechar(container) {
  if (document.getElementById(container).style.display == "block") {
    document.getElementById(container).style.display = "none";
  } else {
    document.getElementById(container).style.display = "block";
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
 
function MascaraDinheiro(i) {
  var decimais = 2;
  var separador_milhar = '.';
  var separador_decimal = ',';

  var decimais_ele = Math.pow(10, decimais);
  var thousand_separador = '$1'+separador_milhar;
  var v = i.value.replace(/\D/g,'');
  v = (v/decimais_ele).toFixed(decimais) + '';
  var splits = v.split(".");
  var p_parte = splits[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, thousand_separador);
  (typeof splits[1] === "undefined") ? i.value = p_parte : i.value = p_parte+separador_decimal+splits[1];

}


function validarFornecedores() {
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

  return confirm("Cadastro de fornecedor realizado com sucesso!");
}

$('.cad').click(function(){
  $('nav ul .itensCad').toggleClass('mostra');
});

$('.menu').click(function(){
  $('nav .itensMenu').toggleClass('mostra');
});

$('.consultas').click(function(){
  $('nav .itensConsultas').toggleClass('mostra');
});

$('.menu').click(function(){
  $('nav div .seta1').toggleClass('mostra');
});

$('.cad').click(function(){
  $('nav div .seta2').toggleClass('mostra');
});

$('.consultas').click(function(){
  $('nav div .seta3').toggleClass('mostra');
});

let i = 0;
let placeholder = "";
const txt = "Pesquisar por...";

function type() {
  placeholder += txt.charAt(i);
  document.getElementById("pesquisarPor").setAttribute("placeholder",placeholder);
  document.getElementById("pesquisarPor2").setAttribute("placeholder",placeholder);
  document.getElementById("pesquisarPor3").setAttribute("placeholder",placeholder);
  document.getElementById("pesquisarPor4").setAttribute("placeholder",placeholder);
  document.getElementById("pesquisarPor5").setAttribute("placeholder",placeholder);
  
  i++;
  setTimeout(type);
}

type();

let i2 = 0;
let placeholder2 = "";
const txt2 = "Digite o nome do produto...";

function type2() {
  placeholder2 += txt2.charAt(i2);
  
  document.getElementById("descProd").setAttribute("placeholder",placeholder2);
  
  i2++;
  setTimeout(type2);
}

type2();

let i3 = 0;
placeholder3 = "";
const txt3 = "Digite o fabricante do produto...";

function type3() {
  placeholder3 += txt3.charAt(i3);
  
  document.getElementById("fabric").setAttribute("placeholder",placeholder3);
  i3++;
  setTimeout(type3);
}

type3();

let i4 = 0;
placeholder4 = "";
const txt4 = "Digite...";

function type4() {
  placeholder4 += txt4.charAt(i4);
  
  document.getElementById("precoProduto").setAttribute("placeholder",placeholder4);
  document.getElementById("precoCompra").setAttribute("placeholder",placeholder4);
  document.getElementById("porcentagemCusto").setAttribute("placeholder",placeholder4);
  document.getElementById("porcentagemLucro").setAttribute("placeholder",placeholder4);
  document.getElementById("precoSugerido").setAttribute("placeholder",placeholder4);
  document.getElementById("status").setAttribute("placeholder",placeholder4);
  document.getElementById("entradaProduto").setAttribute("placeholder",placeholder4);
  document.getElementById("local-loja").setAttribute("placeholder",placeholder4);
  document.getElementById("local").setAttribute("placeholder",placeholder4);
  document.getElementById("local-loja").setAttribute("placeholder",placeholder4);
  document.getElementById("razaoSocial").setAttribute("placeholder",placeholder4);
  document.getElementById("nomeFantasia").setAttribute("placeholder",placeholder4);
  document.getElementById("endereco").setAttribute("placeholder",placeholder4);
  document.getElementById("endereco2").setAttribute("placeholder",placeholder4);
  document.getElementById("numero").setAttribute("placeholder",placeholder4);
  document.getElementById("numero2").setAttribute("placeholder",placeholder4);
  document.getElementById("complemento").setAttribute("placeholder",placeholder4);
  document.getElementById("complemento2").setAttribute("placeholder",placeholder4);
  document.getElementById("bairro").setAttribute("placeholder",placeholder4);
  document.getElementById("bairro2").setAttribute("placeholder",placeholder4);
  document.getElementById("cidade").setAttribute("placeholder",placeholder4);
  document.getElementById("cidade2").setAttribute("placeholder",placeholder4);
  document.getElementById("estado").setAttribute("placeholder",placeholder4);
  document.getElementById("estado2").setAttribute("placeholder",placeholder4);
  document.getElementById("pais").setAttribute("placeholder",placeholder4);
  document.getElementById("pais2").setAttribute("placeholder",placeholder4);
  document.getElementById("nome1").setAttribute("placeholder",placeholder4);
  document.getElementById("nome2").setAttribute("placeholder",placeholder4);
  document.getElementById("telefone1").setAttribute("placeholder",placeholder4);
  document.getElementById("telefone2").setAttribute("placeholder",placeholder4);
  document.getElementById("telefone3").setAttribute("placeholder",placeholder4);
  document.getElementById("telefone4").setAttribute("placeholder",placeholder4);
  document.getElementById("email1").setAttribute("placeholder",placeholder4);
  document.getElementById("email2").setAttribute("placeholder",placeholder4);
  document.getElementById("nomeCompleto").setAttribute("placeholder",placeholder4);
  i4++;
  setTimeout(type4);
}

type4();

// document.getElementsByName('telefone')[0].placeholder='digite..';

let i5 = 0;
placeholder5 = "";
const txt5 = "00000-000";

function type5() {
  placeholder5 += txt5.charAt(i5);
  
  document.getElementById("cep").setAttribute("placeholder",placeholder5);
  document.getElementById("cep2").setAttribute("placeholder",placeholder5);
  i5++;
  setTimeout(type5);
}

type5();

let i6 = 0;
placeholder6 = "";
const txt6 = "000.000.000-00";

function type6() {
  placeholder6 += txt6.charAt(i6);
  
  document.getElementById("cnpj").setAttribute("placeholder",placeholder6);
  document.getElementById("inMunicipal").setAttribute("placeholder",placeholder6);
  document.getElementById("inEstadual").setAttribute("placeholder",placeholder6);
  document.getElementById("cpf").setAttribute("placeholder",placeholder4);
  i6++;
  setTimeout(type6);
}

type6();


function validarProdutos() {

  Produtos = new Object();
  Produtos.descProd = document.getElementById("descProd").value;
  Produtos.fabric = document.getElementById("fabric").value;
  Produtos.precoProduto = document.getElementById("precoProduto").value;
  Produtos.precoCompra = document.getElementById("precoCompra").value;
  Produtos.porcentagemCusto = document.getElementById("porcentagemCusto").value;
  Produtos.porcentagemLucro = document.getElementById("porcentagemLucro").value;
  Produtos.precoSugerido = document.getElementById("precoSugerido").value;
  Produtos.status = document.getElementById("status").value;
  
  return confirm("Cadastro do produto foi realizado com sucesso!");
}


