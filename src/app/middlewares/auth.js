export default (req, res, next) => {
    const userKey = req.headers['x-admin-key'] 

    if (userKey && userKey === process.env.ADMIN_API_KEY) {
        return next() 
    }

    return res.status(401).json({ error: "Acesso negado. Chave de admin inválida." }) 
}
