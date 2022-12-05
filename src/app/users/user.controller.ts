import { Router } from 'express';
import { createUser } from './user.service';

const router = Router();

router.post('/', async (req, res) => {
    const user = req.body;
    const result = await createUser(req.db, user);

    res.json({
        message: 'Should create user',
        data: result,
    });
});

export const userController = router;
