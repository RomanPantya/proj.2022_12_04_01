import express from 'express';
import { userRouter } from './routers/user.router';

const app = express();

const port = 3000;

app.use(express.json());

app.use('user', userRouter);

app.listen(port, () => {
    console.info(`Server started on port ${port}`);
});
