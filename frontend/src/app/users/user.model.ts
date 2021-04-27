interface IUser {
  id: string;
  email: string;
  name: string;
  cpf: string;
  phone: string;
  created_at: Date;
}

interface ICreate {
  name: string;
  email: string;
  phone: string;
  cpf: string;
}

interface RequestCreate {
  message: string;
}

interface IBusca {
  email: string;
}

export { IUser, ICreate, RequestCreate, IBusca };
