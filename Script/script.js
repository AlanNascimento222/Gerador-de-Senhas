//variaveis para tamanho de senha


const span = document.querySelector('#senhaOutdoor')
const button = document.getElementById('buttonSenha')
let tamanho = 8
let complexidade = 1
let typeAnimation = false
const chars = '!@#$%^&*()-_+[]{}>\?/'
const numeros = '0123456789'
const letras = 'abcdefghijklmnopqrstuvwxyz'
const letrasMaiscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charsArray = chars.split("")
const numerosArray = numeros.split("")
const letrasArray = letras.split("")
const letrasMaisArray = letrasMaiscula.split("")


//botoes sendo ativados
const botoes = document.querySelectorAll("#button button");
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        tamanho = botao.textContent;
        document.documentElement.style.setProperty('--leght', `${botao.textContent}`);
        console.log("Último botão clicado:", ultimoBotaoClicado);
    });
});

button.addEventListener('click', () => {
    let senha = ""
    for(let i = 0; i < tamanho; i++){
        let seleção = Math.floor(Math.random() * 4)
        switch(seleção){
            case 0:
                senha += charsArray[Math.floor(Math.random() * charsArray.length)]
                break
                case 1:
                    senha += letrasArray[Math.floor(Math.random() * letrasArray.length)]
                    break
                    case 2:
                        senha += letrasMaisArray[Math.floor(Math.random() * letrasMaisArray.length)]
                        break
                        case 3:
                            senha += numerosArray[Math.floor(Math.random() * numerosArray.length)]
                            break
                        }
                        console.log(seleção)
                        console.log(senha)
                        
                    }
                    
                    span.classList.remove('waitAnimation')
                    if(typeAnimation = false){
                        span.classList.add('typewriter')
                        typeAnimation = true
                    } else {
                        typeAnimation = false
                        span.classList.remove('typewriter');
                        void span.offsetWidth
                        span.classList.add('typewriter')
                    }
                    
                    
                    span.textContent = senha
                })