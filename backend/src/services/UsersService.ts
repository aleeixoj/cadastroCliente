import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/UsersRepository'

interface IUser {
  email: string
  name: string
  phone: string
  cpf: string
}

class UsersService {
  private userRepository: Repository<User>
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository)
  }
  async create({ email, name, phone, cpf }: IUser) {
    //verificar se usuario existe
    const userExists = await this.userRepository.findOne({ email })
    //se existir, retornar usuario
    if (userExists) {
      throw new Error('User already exists')
    }
    //se não exisitr salvar no db
    const user = this.userRepository.create({ email, name, phone, cpf })
    await this.userRepository.save(user)
    return user
  }
  async show(email: string) {
    const findUser = await this.userRepository.findOne({ email })

    if (!findUser) {
      throw new Error('User not exists')
    }

    return findUser
  }
}
export { UsersService }
