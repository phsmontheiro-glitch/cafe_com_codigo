import cron from 'node-cron'
import prisma from '../database/prisma.js'
import NoticiasService from '../services/NoticiasService.js'
import EmailService from '../services/EmailService.js'
import { gerarHtmlJornal } from '../utils/TemplateJornal.js'

//*toda segunda noticia
cron.schedule('0 8 * * 1', async () => {
    console.log('Iniciando envio do jornal semanal...')

    const conteudo = await NoticiasService.prepararConteudoJornal()
    const usuarios = await prisma.usuario.findMany({ where: { confirmado: true}})

    for (const usuario of usuarios) {
        const html = gerarHtmlJornal(conteudo, usuario.nome)
        await EmailService.enviar(usuario.email, "Seu Café com Código Semanal", html)
    }
    console.log(`Jornal enviado para ${usuarios.length} usuários`)
})

cron.schedule('0 8 * * 1', async () => {
    console.log('☕ Iniciando o processo automático do Café com Código...') 
    await CadastroService.dispararJornalParaTodos() 
}, {
    timezone: "America/Sao_Paulo"
}) 
