import { Request, Response } from 'express';

const users = [
    {
        name: 'Sthiven',
        email: 'sthivendev@gmail.com'
    },
];

export default{
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};