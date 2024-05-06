const form = document.getElementById("form")
const nome = []
const telefone = []
linhas = ""

form.addEventListener('submit', function(e) {
    e.preventDefault()

    addLinha()
    addTabela()
    contadorLinhas()
})

function addLinha() {
    const inputNome = document.getElementById("nome")
    const inputNumero = document.getElementById("numero")

    if(nome.includes(inputNome.value)){
    alert(`O nome ${inputNome.value} ja foi salvo!`)
    return
    }

    if(telefone.includes(inputNumero.value)){
        alert(`O numero ${inputNumero.value} ja foi salvo!`)
        return
    }else{
    nome.push(inputNome.value)
    telefone.push(inputNumero.value)

    let linha = "<tr>"
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += "</tr>"
    
    linhas += linha
    }
}
function addTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function contadorLinhas() {
    const linhas = document.querySelectorAll("tr").length - 1
    const contador = document.getElementById("contador")

    contador.textContent = `${linhas} contatos`

}

