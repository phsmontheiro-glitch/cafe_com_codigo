import CadastroRepository from "../repositories/CadastroRepository.js" 
import EmailService from './EmailService.js'
import NoticiasService from "./NoticiasService.js" 
import { gerarHtmlJornal } from "../utils/TemplateJornal.js"

class CadastroService {
    
    async registrarNovoUsuario(dadosDoFront) {
    const { nome, email, data_nascimento } = dadosDoFront 

    const dadosFormatados = {
        nome,
        email,
        data_nascimento: data_nascimento ? new Date(data_nascimento) : new Date()
    } 
   
    //* SALVA NO BANCO APENAS UMA VEZ
    const usuario = await CadastroRepository.create(dadosFormatados) 

    //* DISPARA O E-MAIL IMEDIATO
    EmailService.enviarConfirmacaoEmail(usuario.email, usuario.nome).catch(err => {
        console.error('Erro ao enviar e-mail de confirmação:', err) 
    }) 

    return {
        usuario, 
        message: "Quase lá! Verifique seu e-mail para confirmar sua inscrição."
    } 
}

   async liberarPrimeiroCafe(email) {
    const usuario = await CadastroRepository.findByEmail(email) 
    
    if (usuario && usuario.confirmado) {

        const dadosJornal = await NoticiasService.prepararConteudoJornal() 
        const html = gerarHtmlJornal(dadosJornal, usuario.nome, usuario.email) 

        EmailService.enviarJornalImediato(usuario.email, usuario.nome, html).catch(err => {
            console.error('Erro ao enviar o primeiro jornal:', err) 
        }) 
    }
}

    async dispararJornalParaTodos() {
    try {
        const dadosJornal = await NoticiasService.prepararConteudoJornal() 
        const usuarios = await CadastroRepository.findAllConfirmados()  

        const envios = usuarios.map(usuario => {
            const html = gerarHtmlJornal(dadosJornal, usuario.nome, usuario.email) 
            return EmailService.enviarEmailSemanal(usuario.email, usuario.nome, html) 
        }) 

        await Promise.all(envios) 
        console.log(" Disparo concluído!") 
    } catch (error) {
        throw error  //* Lança para o Controller pegar no catch
    }
}

}

export default new CadastroService() 
