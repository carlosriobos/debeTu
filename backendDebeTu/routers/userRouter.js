import { Router } from "express";
import * as userController from '../controllers/userController.js'

const userRouter = Router()
// listar todos los usuarios
userRouter.get('/', userController.findAll)
// añadir un nuevo ususario
userRouter.post('/', userController.save)

export default userRouter