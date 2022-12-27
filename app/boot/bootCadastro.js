import { ProdutosController } from "../controller/produtosController.js";
import { Validacao } from "../controller/validacaoController.js";
import { BuscaController } from "../controller/buscaController.js";
import { PageView } from "../view/pageView.js";
import { ContatoController } from "../controller/contatoController.js";

new Validacao().aplicaValidacao()
new ContatoController().submitFormulario()

const adiciona = new ProdutosController()
const formulario = document.querySelector("[data-formulario]")
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    try{
         adiciona.adicionaCard()
        PageView.exibeAviso(
            "aviso",
            "Produto adicionado com sucesso!",
            "admin.html",
            false
        )
    }
    catch{
        PageView.exibeAviso(
            "aviso",
            "Não foi possível adicionar o video",
            "admin.html",
            false
        )
    }
})

const inputBusca = document.querySelector('.input__busca')
const inputDropdown = document.querySelector('[data-dropdown]')
const botaoBusca = document.querySelector('.btn__busca')

botaoBusca.addEventListener('click', evento => {
    evento.preventDefault()
    BuscaController.ativaBotao();
})

inputBusca.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'.input__busca'))
inputDropdown.addEventListener("blur", evento => BuscaController.filtroBusca(evento,'[data-dropdown]'))