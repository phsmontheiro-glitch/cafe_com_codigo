import cron from 'node-cron'
import prisma from '../database/prisma.js'

class LimparCadastroExpirados {
    init() {

        cron.schedule('0 0 * * *', async () => {
            console.log('Iniciando limpeza de usuários expirados') 
            
            const dataLimite = new Date() 
            dataLimite.setDate(dataLimite.getDate() - 1) 

            try {
                const deletados = await prisma.usuario.deleteMany({
                    where: {
                        confirmado: false,
                        criado_em: {
                            lt: dataLimite
                        }
                    }
                }) 

                if (deletados.count > 0) {
                    console.log(`Sucesso: ${deletados.count} usuários removidos.`) 
                } else {
                    console.log('Nenhum usuário expirado encontrado.') 
                }
            } catch (error) {
                console.error('Erro ao rodar:', error) 
            }
        }) 
    }
}

export default new LimparCadastroExpirados() 
