import { Request, Response } from 'express';
import EmailService from '../services/Email.Service';

const users = [
    {
        name: 'Sthiven',
        email: 'sthivendev@gmail.com'
    },
];

export default{
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: 'Sthiven', 
                email:'sthivendev@gmail.com'
            },
            message: {
                subject: 'Bem-vindo ao sistema', 
                body:'Seja bem-vindo'
            }
        });
        return res.send();
    }
};