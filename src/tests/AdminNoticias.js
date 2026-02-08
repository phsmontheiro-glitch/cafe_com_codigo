import 'dotenv/config' 
import NoticiasService from '../services/NoticiasService.js'

async function rodar() {
    console.log("Testando busca de notícias...") 
    const dados = await NoticiasService.prepararConteudoJornal() 
    
    if (dados) {
        console.log("Sucesso!") 
        console.log("Data:", dados.data) 
        console.log("Tópicos:", dados.sumario) 
    } else {
        console.log("Falha ao buscar notícias. Verifique sua NEWS_API_KEY.") 
    }
}

rodar() 
