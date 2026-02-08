import EmailService from '../app/services/EmailService.js' 
import CadastroService from '../app/services/CadastroService.js' 
import ApiResponse from '../app/utils/ApiResponse.js' 

class AdminController {
    
    async envioConfirmacao(req, res) {
        const { email, nome } = req.body 

        if (!email || !nome) {
            return ApiResponse.error(res, "Informe nome e email para o teste!", 400) 
        }

        try {
            await EmailService.enviarConfirmacaoEmail(email, nome) 
            return ApiResponse.success(res,`☕ E-mail de confirmação enviado com sucesso para ${email}`)
        } catch (error) {
            console.error("--- ERRO TESTE BOAS-VINDAS ---", error) 
            return ApiResponse.error(res, "Falha ao enviar e-mail de boas-vindas.", 500, error.message) 
        }
    }

    async dispararJornal(req, res) {
        try {
            //* Chama o disparo em massa real (API + Banco + Email)
            await CadastroService.dispararJornalParaTodos() 
            return ApiResponse.success(res, "📧 Jornal real disparado para todos os confirmados!") 
        } catch (error) {
            console.error("--- ERRO TESTE JORNAL ---", error) 
            return ApiResponse.error(res, "Falha ao disparar jornal em massa.", 500, error.message) 
        }
    }
}

export default new AdminController()
