import DebugModule from 'debug';
import { DEBUG, DEBUG_PREFIX } from '@config';
import { logger } from '@utils';

// DebugModule.formatArgs = (args: any) => {}
DebugModule.log = function (...args: any[]) {
  console.log(...args);
  logger.debug(args);
};
DEBUG && DebugModule.enable(DEBUG);
export const Debug = (prefix: string) => DebugModule(`${DEBUG_PREFIX}:${prefix}`);
