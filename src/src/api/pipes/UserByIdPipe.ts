import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../db/schemas/User';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserByIdPipe implements PipeTransform<string, Promise<string>> {
  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async transform (userId: string) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new BadRequestException('User with such id not found');
    }

    return userId;
  }
}
