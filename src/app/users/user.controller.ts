import { Router } from 'express';
import { createUser, getAll } from './user.service';

const router = Router();

router.post('/', async (req, res) => {
    const user = req.body;
    const result = await createUser(req.db, user);

    res.json({
        message: 'Should create user',
        data: result,
    });
});

router.get('/', async (req, res) => {
    const result = await getAll(req.db);

    res.json({
        message: 'Thats all users',
        data: result,
    });
});

export const userController = router;
