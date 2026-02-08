import  prisma  from "../database/prisma.js"

class CadastroRepository {
    
    async confirmarEmail(email) {
    return await prisma.usuario.update({
        where: { email: email },
        data: { confirmado: true }
    }) 
}

   async create(dados) {
    try {
        return await prisma.usuario.create({ data: dados }) 
    } catch (erro) {
        throw erro  
    }
}

    async findAll() {
        try { 
            return await prisma.usuario.findMany()
        } catch (erro) {
            throw new Error('Não foi possível localizar!')
        }
    }

    async findById(id) {
    try {
        return await prisma.usuario.findUnique({
            where: { id: Number(id) } 
        }) 
    } catch (erro) {
        throw new Error('Erro ao localizar usuário pelo ID') 
    }
}

   async findByEmail(email) {
        try {
            return await prisma.usuario.findUnique({ where: { email } }) 
        } catch (erro) {
            throw new Error('Não foi possível localizar!')
        }
    }

    async update(dados, id) {
        try {
         return await prisma.usuario.update({ where: { id: Number(id) }, data: dados })
        } catch (erro) {
            throw new Error('Não foi possivel atualizar!')    
        }
    }

    async delete(id) {
        try { return await prisma.usuario.delete({ where: { id: Number(id) } })
        } catch (erro) {
            throw new Error('Não foi possivel apagar!')
        }
    }

    async updateConfirmado(email, status) {
    return await prisma.usuario.update({
        where: { email },
        data: { confirmado: status }
    })
}

   async deleteByEmail(email) {
    try {
        return await prisma.usuario.delete({
            where: { email: email }
        }) 
    } catch (erro) {
        throw new Error('Não foi possível remover o registro.') 
    }
}

async findAllConfirmados() {
    try {
        return await prisma.usuario.findMany({
            where: { confirmado: true }
        }) 
    } catch (erro) {
        throw new Error('Não foi possível buscar usuários confirmados.') 
    }
}
}

export default new CadastroRepository() 
