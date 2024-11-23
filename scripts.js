/* Lista de Tarefas

[X] Saber quando botão for clicado
[X] Pegar Texto dentro do Input
[X] Colocar esse texto na tela
[X] Deletar a tarefa na tela

*/

function adicionarTarefa() {
    let valorInput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorInput + '<span onclick="deletarTarefa(this)" >❌</span>'


    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
   
}


function deletarTarefa (li) {
    li.parentElement.remove()
}