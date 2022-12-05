import { generateServer } from './app/generate-server';
import { userController } from './app/users/user.controller';
import { connectToPg } from './common/connect-to-pg.common';

async function main() {
    const app = generateServer();

    const connection = await connectToPg();

    app.use((req, _, next) => {
        req.db = connection;

        next();
    });

    app.use('/users', userController);

    app.listen(3000, () => {
        console.info(`Server started on port 3000`);
    });
}

main();
