import { serverController } from "./serverController.js"
import { exibeAviso } from "../view/exibeAviso.js"

const formulario = document.querySelector("[data-formulario]")

async function adicionaCard(evento){
    evento.preventDefault()
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const preco = document.querySelector("[data-preco]").value
    const categoria = document.querySelector("[data-categoria]").value
    const descricao = document.querySelector("[data-descricao]").value
    
    await serverController.postProdutos(url, titulo, preco, categoria, descricao)
    
}

formulario.addEventListener('submit', evento => {
    try{
        adicionaCard(evento)
        exibeAviso("Produto adicionado com sucesso!")
        document.location.reload(false)
    }
    catch{
        exibeAviso("Não foi possível adicionar o video")
    }
})
