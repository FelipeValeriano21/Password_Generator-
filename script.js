const value = document.querySelector("#value")
const input = document.querySelector("#pi_input")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})


function geraStringAleatoria() {

    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < input.value; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }    
    
 
    document.getElementById( 'resposta' ).style.opacity = 1;
    document.getElementById( 'mensagem' ).style.opacity = 1;
    document.getElementById("resposta").innerHTML = stringAleatoria; 
    return stringAleatoria;



}

function Copiar(){

    var text = document.getElementById("resposta").innerHTML;

    
    window.alert("Senha copiada com sucesso 😄" + text);
    window.navigator.clipboard.writeText(text);

}

