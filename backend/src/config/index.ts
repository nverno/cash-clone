import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const DEBUG_PREFIX = process.env.DEBUG_PREFIX ?? 'cashapp';
export const DEBUG =
  process.env.DEBUG ?? process.env.NODE_ENV === 'development'
    ? `${DEBUG_PREFIX}:*`
    : undefined;
export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } =
  process.env;
