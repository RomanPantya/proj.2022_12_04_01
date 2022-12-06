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

export async function getAll(
    connection: PoolClient,
) {
    const { rows } = await connection.query(`
    select * from users`);

    return rows;
}

export async function getOne(
    connection:PoolClient,
    userId: string,
) {
    const { rows } = await connection.query(`
    select * from users
    where id = $1
    `, [userId]);

    return rows;
}

export async function removeOne(
    connection:PoolClient,
    userId: string,
) {
    const { rows } = await connection.query(`
    delete from users where id = $1
    returning *
  `, [userId]);

    return rows;
}
