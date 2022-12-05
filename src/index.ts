import { generateServer } from './app/generate-server';
import { userController } from './app/users/user.controller';

async function main() {
    const port = 3000;

    const app = generateServer();

    app.use('/users', userController);

    app.listen(port, () => {
        console.info(`Server started on port ${port}`);
    });
}

main();
