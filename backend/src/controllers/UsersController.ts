import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    //recebe as informações do client
    const { email, name, phone, cpf } = request.body
    const usersServices = new UsersService()
    try {
      //tenta criar o usuario
      const user = await usersServices.create({ email, name, phone, cpf })
      return response.json({ message: 'Success' })
    } catch (err) {
      //retorna erro
      return response.status(400).json({ message: err.message })
    }
  }
  async findUser(request: Request, response: Response) {
    //recebe as informações do client
    const { email } = request.body

    const usersServices = new UsersService()
    try {
      //busca o usuario no DB
      const user = await usersServices.show(email)
      //retorna o usuario
      return response.json(user)
    } catch (err) {
      //retorna erro
      return response.status(400).json({ message: err.message })
    }
  }
  async editUser(request: Request, response: Response) {
    const { email } = request.params
    return response.json(email)
  }
  async showUser(request: Request, response: Response) {
    const usersServices = new UsersService()
    const user = await usersServices.getAllUser()
    return response.json(user)
  }
}
export { UsersController }
