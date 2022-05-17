import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const DEBUG_PREFIX = process.env.DEBUG_PREFIX ?? 'cashapp';

export const DEBUG =
  process.env.DEBUG ?? process.env.NODE_ENV === 'development'
    ? `${DEBUG_PREFIX}:*`
    : undefined;

export const CREDENTIALS = process.env.CREDENTIALS === 'true';

export const {
  NODE_ENV,
  PORT,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  // send login codes via email
  MAILER_ENABLED = process.env.MAILER_ENABLED === 'true' &&
    process.env.MAILER_USERNAME &&
    process.env.MAILER_PASSWORD &&
    process.env.OAUTH_CLIENTID &&
    process.env.OAUTH_CLIENT_SECRET &&
    process.env.OAUTH_REFRESH_TOKEN,
  MAILER_USERNAME,
  MAILER_PASSWORD,
  OAUTH_CLIENTID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  // send login codes via sms messages
  SMS_ENABLED = process.env.SMS_ENABLED === 'true' &&
    process.env.TWILIO_ACCOUNT_SID &&
    process.env.TWILIO_AUTH_TOKEN &&
    process.env.TWILIO_PHONE_NO,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NO,
} = process.env;
