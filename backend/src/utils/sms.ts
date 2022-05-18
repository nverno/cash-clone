import twilio from 'twilio';
import {
  SMS_ENABLED,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NO,
} from '@config';
import { Debug } from './debug';
import { HttpException } from '@/exceptions';

// eslint-disable-next-line
const debug = Debug('sms');

// simplified test
export const isSmsNumber = (input: string) => /^(1\d{10}|[02-9]\d{9})$/.test(input);

export const cleanSms = (input: string): string => {
  if (input[0] !== '1') input = '1' + input;

  if (input.length !== 11)
    throw new HttpException(
      400,
      `Invalid sms number: ${input}. Only US numbers supported`,
    );
  return input;
};

const smsClient = SMS_ENABLED
  ? twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
  : undefined;

// Send login code via SMS
export const sendSMS = async ({
  phoneNo,
  code,
}: {
  phoneNo: string;
  code: string;
}) => {
  if (!smsClient) throw new Error('SMS client doesnt exist');
  const msg = await smsClient.messages.create({
    to: phoneNo,
    from: TWILIO_PHONE_NO,
    body: `Cash App Sign In Code ${code}`,
  });

  debug(msg);
  return msg;
};
