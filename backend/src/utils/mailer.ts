import nodemailer from 'nodemailer';
import {
  MAIL_USERNAME,
  MAIL_PASSWORD,
  OAUTH_CLIENTID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
} from '@config';
import { Debug } from './debug';
import { HttpException } from '@/exceptions';

const debug = Debug('mailer');

type EmailCode = { email: string; code: string };
export const emailCode = async (data: EmailCode) => {
  const { email, code } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAUTH2',
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD,
      clientId: OAUTH_CLIENTID,
      clientSecret: OAUTH_CLIENT_SECRET,
      refreshToken: OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: MAIL_USERNAME,
    to: email,
    subject: `Cash App Sign In Code ${code}`,
    text: code,
    html: `<b>${code}</b>`,
  };

  return transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      throw new HttpException(500, err.message);
    } else {
      debug('sent:', info);
      return info;
    }
  });
};
