import { Router } from 'express';
import {
    createUser, getAll, getOne, removeOne, updateOne,
} from './user.service';

const router = Router();

router.post('/', async (req, res) => {
    const user = req.body;
    const result = await createUser(req.db, user);

    res.json({
        message: 'Should create user',
        data: result,
    });
});

router.get('/:id', async (req, res) => {
    const { id: userId } = req.params;
    const result = await getOne(req.db, userId);

    res.json({
        message: "It's your user",
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

router.put('/:id', async (req, res) => {
    const { id: userId } = req.params;
    const { name } = req.body;
    const result = await updateOne(req.db, userId, name);

    res.json({
        message: 'Thats user was update',
        data: result,
    });
});

router.delete('/:id', async (req, res) => {
    const { id: userId } = req.params;
    const result = await removeOne(req.db, userId);

    res.json({
        message: 'Thats user was removed',
        data: result,
    });
});

export const userController = router;
