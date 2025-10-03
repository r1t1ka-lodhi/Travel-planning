import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
    const mailGenerator=new Mailgen({
        theme: 'default',
        product: {
            name: ' Travel Planning',
            link: 'https://mailgen.js/'
        }

    })
    const emailText = mailGenerator.generatePlaintext(options.mailgenContent);
    const emailHtml = mailGenerator.generate(options.mailgenContent);


    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_TRAP_SMTP_HOST,
        port: process.env.MAIL_TRAP_SMTP_PORT,
        auth: {
            user: process.env.MAIL_TRAP_SMTP_USER,
            pass: process.env.MAIL_TRAP_SMTP_PASS
        }
    });

    const mail ={
        from:"mail.taskmanager@example.com",
        to:options.email,   
        subject:options.subject,
        text:emailText,
        html:emailHtml
    }

    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


const emailVerificationMailGenContent = (username ,verificationUrl) => {
    return{
        body:{
            name: username,
            intro: 'Welcome to Travel Planning! We\'re very excited to have you on board.',
            action: {
                instructions: 'To get started with Travel Planning, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Verify Email',
                    link: verificationUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."

        },
    };
};

export {
    emailVerificationMailGenContent,
    sendMail,
}