import app from './app.js'
import express from 'express'
import './app/jobs/LimparCadastroExpirados.js'
import path from 'path'

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html')) 
})

//*navegador abra automaticamente o Front-end
app.use(express.static('public'))

//* escutar a porta
app.listen(PORT, () => {
console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
