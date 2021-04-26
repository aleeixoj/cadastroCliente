import { Router } from 'express'
import { UsersController } from './controllers/UsersController'
const usersController = new UsersController()

const routes = Router()
routes.post('/create', usersController.create)
routes.get('/getuser', usersController.findUser)
routes.put('/editUser/:email', usersController.editUser)

export { routes }
