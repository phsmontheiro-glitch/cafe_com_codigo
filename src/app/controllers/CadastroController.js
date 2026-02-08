import CadastroRepository from '../repositories/CadastroRepository.js'
import CadastroService from '../services/CadastroService.js' 
import ApiResponse from '../utils/ApiResponse.js'  

class CadastroController {

    async confirmar(req, res) {
    try {
        const { email } = req.params
        await CadastroRepository.confirmarEmail(email)
        await CadastroService.liberarPrimeiroCafe(email)
        return res.redirect('/confirmado.html')
    } catch (erro) {

        console.error("ERRO NA CONFIRMAÇÃO:", erro)
        return res.status(400).send(`<h1>Erro ao confirmar: ${erro.message}</h1>`)
    }
}

    async index(req, res) {
        try {
            const row = await CadastroRepository.findAll()
            return ApiResponse.success(res, "Lista recuperada com sucesso", row)
        } catch (error) {
            return ApiResponse.error(res, "Erro ao buscar registros", 500, error.message)
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id 
            const row = await CadastroRepository.findById(id) 
            return ApiResponse.success(res, "Registro encontrado", row) 
        } catch (error) {
            return ApiResponse.error(res, "Registro não encontrado", 404) 
        }
    }

    async store(req, res) {
        try {
            const resultado = await CadastroService.registrarNovoUsuario(req.body) 
            return ApiResponse.success(res, "Quase lá! Verifique seu e-mail.", resultado, 201) 
        } catch (error) {
          if (error.code === 'P2002' || error.message.includes("Unique constraint")) {
                return ApiResponse.error(res, "Este e-mail já está cadastrado em nossa lista! ☕", 400) 
            }
            return ApiResponse.error(res, "Não foi possível realizar o cadastro. Verifique os dados.", 400) 
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id 
            const dados = req.body 
            const row = await CadastroRepository.update(dados, id) 
            return ApiResponse.success(res, "Dados atualizados com sucesso", row) 
        } catch (error) {
            return ApiResponse.error(res, "Erro ao atualizar dados", 400) 
        }
    }
    
    async delete(req, res) {
        try {
            const id = req.params.id 
            const row = await CadastroRepository.delete(id) 
            return ApiResponse.success(res, "Registro removido com sucesso", row) 
        } catch (error) {
            return ApiResponse.error(res, "Erro ao remover registro", 400) 
        }
    }

    async descadastrar(req, res) {
        const { email } = req.params 
        try {
            await CadastroRepository.deleteByEmail(email)  
            return res.redirect('/descadastrado.html') 
        } catch (error) {
            console.error("Erro ao deletar:", error) 
            return res.status(400).send("Usuário não encontrado ou já removido.") 
        }
    }
}

//* padrão Singleton
export default new CadastroController()
