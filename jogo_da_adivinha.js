const sorteia = function(n) {
       return Math.round(Math.random() * n);
    }

    var input = document.querySelector('input');
    input.focus();

    let segredo = sorteia(10);

    let tentativas = 1;

    function verifica() {

    if (tentativas == 3) {

        alert("Suas tentantivas acabaram! Fim de jogo!")

    }

    if (tentativas < 3) {

        if(input.value == segredo) {

        alert("Você Acertou! Eu pensei em " + segredo);       

        } else {

            alert("Você errou! Tente de novo!");
            tentativas++;

        }  

    }

    input.value = "";
    input.focus();

    }

    let button = document.querySelector('button');
    button.onclick = verifica;
