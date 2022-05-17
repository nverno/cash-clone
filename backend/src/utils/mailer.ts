import nodemailer from 'nodemailer';
import {
  MAILER_USERNAME,
  MAILER_PASSWORD,
  OAUTH_CLIENTID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
} from '@config';
import { Debug } from './debug';
import { HttpException } from '@/exceptions';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const debug = Debug('mailer');

type EmailCode = { email: string; code: string };
export const sendEmail = async (
  data: EmailCode,
): Promise<SMTPTransport.SentMessageInfo> => {
  const { email, code } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAUTH2',
      user: MAILER_USERNAME,
      pass: MAILER_PASSWORD,
      clientId: OAUTH_CLIENTID,
      clientSecret: OAUTH_CLIENT_SECRET,
      refreshToken: OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: MAILER_USERNAME,
    to: email,
    subject: `Cash App Sign In Code ${code}`,
    text: code,
    html: `<b>${code}</b>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    debug('sent:', info);
    return Promise.resolve(info);
  } catch (err) {
    throw new HttpException(500, err.message);
  }
};
