import { IUser } from '../entities/user.interface';

export class FullUserDto implements IUser {
    id!: number;

    name!: string;
}
