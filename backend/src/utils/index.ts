export * from './logger';
export * from './util';
export * from './validateEnv';
export * from './debug';
export * from './mailer';
export * from './sms';

export const uuidRe = (param: string) => `:${param}([A-Fa-f0-9-]{36})`;
