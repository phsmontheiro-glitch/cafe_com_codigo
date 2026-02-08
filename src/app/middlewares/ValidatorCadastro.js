/**
 * Middleware para validar os dados de cadastro de usuário.
 * Verifica se os campos obrigatórios existem e se o e-mail é válido.
 */
export default (req, res, next) => {
    const { nome, email, data_nascimento } = req.body
    const errors = [];

    if (!nome) errors.push('O campo nome é obrigatório')
    if (!data_nascimento) errors.push('O campo data de nascimento é obrigatório')

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email) {
            errors.push('O campo E-mail é obrigatorio')
        } else if (!emailRegex.test(email)){
            errors.push('O formato do E-mail é inválkido')
        }

        if (errors.length > 0) {
            return res.status(400).json({ errors })
        }

        next()
    }
