import { Router } from 'express'
import AuthController from '../../controllers/auth.controller'

const router = Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/google-login', AuthController.loginWithGoogle)
router.post('/refresh', AuthController.refresh)

export default router
