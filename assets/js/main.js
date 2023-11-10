const form = document.querySelector('#formulario');

form.addEventListener('submit', formulario);

function formulario (e){
  e.preventDefault();

  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');

  const peso = Number(inputPeso.value );
  const altura = Number(inputAltura.value);


  if(!peso){
    setResultado("Peso invalido", false) //funcao recebendo os parametros uma msg e outra falso
    return;
  };
  if(!altura){
    setResultado("Altura invalida", false) //funcao recebendo os parametros uma msg e outra falso
    return;
  };

  const imc = getIMC(peso, altura)
  const nivelImc = getNivelImc(imc)

const msg = `Seu IMC é ${imc} ${nivelImc}`
setResultado(msg, true)

};
function getNivelImc(imc){
  const nivel = [
  "Abaixo do Peso",
  "Peso normal",
  "Sobrepeso",
  "Obesidade grau 1",
  "Obesidade grau 2",
  "Obesidade grau 3"
  ]
  const figuras =  [
    "<br> <img src ='./assets/img/foto_mulher_obesidade3.jpg' class='imagem'>",
    "<br> <img src ='./assets/img/foto_mulher_obesidade2.jpg' class='imagem'>",
    "<br> <img src ='./assets/img/foto_mulher_obesidade1.jpg' class='imagem'>",
    "<br> <img src ='./assets/img/foto_mulher_acima_do_peso.jpg' class='imagem'>",
    "<br> <img src ='./assets/img/Foto_mulher_peso_normal.jpg' class='imagem'>",
    "<br> <img src ='./assets/img/Foto_mulher_abaixo_do_peso.jpg' class='imagem'>",
  ]
   if (imc > 39.9) return nivel[5] + figuras[0]
   if (imc >=34.9) return nivel[4] + figuras[1]
   if (imc >=29.9) return nivel[3] + figuras[2]
   if (imc >=24.9) return nivel[2] + figuras[3]
   if (imc >=18.5) return nivel[1] + figuras[4]
   if (imc < 18.5) return nivel[0] + figuras[5]

}

function getIMC(peso, altura){
  const imc = peso / altura**2;
  return imc.toFixed(2)
};

function createP(){
  const p = document.createElement('p'); // criando uma tag p
  return p;

};

function setResultado (msg, isValid){
  const resultado = document.querySelector("#resultado")
  resultado.innerHTML = ``;
  const p = createP();// criando um const e atribuindo ela o valor da funcao createP( fucao criada para criar add uma tag p )

  if(isValid){
    p.classList.add('paragrafo-resultado')
  } else{ 
    p.classList.add('bad')
  }
  p.innerHTML = msg
  resultado.appendChild(p) // adicionar  a tag p criada na funcao createP dentro do id "resultado"
  
};





