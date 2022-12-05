const pulaLinha = function() {
        document.write('<br><br>');
}

const mostra = function(frase) {
        document.write(frase)
        pulaLinha()
}

const sorteia = function(n) {
       return Math.round(Math.random() * n);
}

let numeroPensado = sorteia(10);

let tentativas = 1;

while (tentativas <= 3) {

let chute = parseInt(prompt("Já pensei. Qual número de 1 a 10 você acha que é?"));

if(chute == numeroPensado) {

  mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
  break;

} else {

  if (chute > numeroPensado) {

    mostra("Você errou! Seu número é maior que o número pensado!");

  } else {

    mostra("Você errou! Seu número é menor que o número pensado!")
  } 

  }

    tentativas++

}
