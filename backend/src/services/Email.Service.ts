interface IMailTo {
    name: string;
    email: string;
}
interface IMailMassage {
    subject: string;
    body: string;
    // attachment?: Array<string>; or
    attachment?: string[];
}
interface IMessageDTO{
    to: IMailTo;
    message: IMailMassage;
}
// DTO -> Data Transfer Object (DDD)
class EmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado ${to.name}: ${message.subject}`);
    }
}
// class EmailService {
//     sendMail(to: IMailTo, message: IMailMassage) {
//         console.log(`Email enviado ${to.name}: ${message.subject}`);
//     }
// }



export default EmailService;