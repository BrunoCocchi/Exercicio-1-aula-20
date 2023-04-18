let convidados = [];

function clique() {
    let text = document.getElementById("nome")
    convidados.push(nome.value);
    
}

function visu() {
    let itemlista;
    let lista = document.querySelector(".lista__convidados");
    lista.innerHTML = "";

    convidados.forEach(convidado => {
        itemlista = document.createElement('li');
        itemlista.textContent = convidado;
        lista.appendChild(itemlista)
    })

}