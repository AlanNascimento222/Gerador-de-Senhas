//variaveis para tamanho de senha
const span = document.getElementById('senhaOutdoor')
const button = document.getElementById('buttonSenha')
let tamanho = 10
let complexidade = 1
const chars = '!@#$%^&*()-_+[]{}>\?/'
const numeros = '0123456789'
const letras = 'abcdefghijklmnopqrstuvwxyz'
const letrasMaiscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charsArray = chars.split("")
const numerosArray = numeros.split("")
const letrasArray = letras.split("")
const letrasMaisArray = letrasMaiscula.split("")


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
    span.textContent = senha
})
