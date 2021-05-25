import { compare } from 'bcrypt';
import { inject } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // verificar se o usuário existe

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    // senha está correta
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    const token = sign({}, '1192d2096d7d2db2909886bb71a8fa9f', {
      subject: user.id,
      expiresIn: '1d',
    });
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
    // gerar jsonwebToken
  }
}

export { AuthenticateUserUseCase };
