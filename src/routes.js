import { Router } from 'express'
import CadastroController from './app/controllers/CadastroController.js'
import ValidatorCadastro from './app/middlewares/ValidatorCadastro.js'
import AdminController from './tests/AdminController.js'
import authMiddleware from './app/middlewares/auth.js' 


const router = Router()

//* Rotas
router.post('/admin/confirmar', authMiddleware, AdminController.envioConfirmacao) 
router.post('/admin/jornal', authMiddleware, AdminController.dispararJornal) 
router.post('/cadastro', ValidatorCadastro, CadastroController.store)
router.get('/cadastro',CadastroController.index)
router.get('/cadastro/:id', CadastroController.show)
router.put('/cadastro/:id', CadastroController.update)
router.delete('/cadastro/:id', CadastroController.delete)
router.get('/confirmar/:email', CadastroController.confirmar)
router.get('/descadastrar/:email', CadastroController.descadastrar)

export default router

