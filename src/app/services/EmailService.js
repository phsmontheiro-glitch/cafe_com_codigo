import nodemailer from 'nodemailer'
import { templateBoasVindas } from '../utils/EmailTemplates.js'

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })
    }

    async enviarJornalImediato(email, nome, html) {
    return await this.enviar(
        email, 
        "☕ Seu Primeiro Café com codigo Chegou | As notícias de hoje", 
        html
    ) 
}

    async enviarConfirmacaoEmail(emailUsuario, nomeUsuario) {
    //* Monta o link usando a BASE_URL do .env
    const linkConfirmacao = `${process.env.BASE_URL}/confirmar/${emailUsuario}` 
    const html = templateBoasVindas(nomeUsuario, linkConfirmacao) 

    return await this.enviar(emailUsuario, '☕ Confirme seu e-mail - Café com Código!', html) 
}
    
    async enviar(to, subject, html) {
        const mailOptions = {
            from: `"Café com Codigo ☕" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        } 

        try {
            return await this.transporter.sendMail(mailOptions) 
        } catch (error) {
            console.error("Erro técnico ao enviar e-mail:", error) 
            throw error 
        }
    }
    async enviarEmailSemanal(email, nome, html) {
        //* Usamos o método 'enviar' da própria classe (this)
        return await this.enviar(
            email, 
            "☕ Café com Código | Sua dose semanal de tecnologia", 
            html
        ) 
    }
}


export default new EmailService() 
