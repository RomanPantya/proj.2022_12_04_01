import { IUser } from './user.interface';

export class UserEntity implements IUser {
    id!: number;

    name!: string;
}
