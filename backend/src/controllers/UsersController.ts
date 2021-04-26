import { Request, Response } from 'express'
import { UsersService } from '../services/UsersService'

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, name, phone, cpf } = request.body
    const usersServices = new UsersService()
    try {
      const user = await usersServices.create({ email, name, phone, cpf })
      return response.json(user)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
  async findUser(request: Request, response: Response) {
    const { email } = request.body

    const usersServices = new UsersService()
    try {
      const user = await usersServices.show(email)
      return response.json(user)
    } catch (err) {
      return response.status(400).json({ message: err.message })
    }
  }
  async editUser(request: Request, response: Response) {
    const { email } = request.params
    return response.json(email)
  }
}
export { UsersController }
