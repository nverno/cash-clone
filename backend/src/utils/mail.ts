import nodemailer from 'nodemailer';
// import { EMAIL_PASSWORD } from '@config';
import { Debug } from './debug';

const debug = Debug('mail');

type EmailCode = { email: string; code: string };
export const emailCode = async (data: EmailCode) => {
  const { email, code } = data;

  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Cash App Clone" <cashappclone1@gmail.com>',
    to: email,
    subject: `Cash App Sign In Code ${code}`,
    text: code,
    html: `<b>${code}</b>`,
  });

  debug('sent:', info);
};
