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
    //se existir, retorna erro
    if (userExists) {
      throw new Error('User already exists')
    }
    //se não exisitr salvar no db
    const user = this.userRepository.create({ email, name, phone, cpf })
    await this.userRepository.save(user)
    return user
  }
  async show(email: string) {
    //busca usuario
    const findUser = await this.userRepository.findOne({ email })

    if (!findUser) {
      //se não encontrar, retorna erro
      throw new Error('User not exists')
    }
    //se encontrar, retorna o usuario
    return findUser
  }
  async getAllUser() {
    const findAllUser = await this.userRepository.find()

    return findAllUser
  }
}
export { UsersService }
