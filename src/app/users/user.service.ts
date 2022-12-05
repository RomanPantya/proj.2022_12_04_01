import { PoolClient } from 'pg';
import { UserEntity } from '../../entities/user.entity';

export async function createUser(
    connection: PoolClient,
    user: Omit<UserEntity, 'id'>,
) {
    const { rows: [result] } = await connection.query(`
    insert into users(
    name
    )
    values(
      $1
    )
    returning id;
    `, [user.name]);

    return result as { id: number };
}
