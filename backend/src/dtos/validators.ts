import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import prisma from '@/client';

@ValidatorConstraint({ name: 'isCashTag', async: false })
export class IsCashTag implements ValidatorConstraintInterface {
  validate(data: string): boolean | Promise<boolean> {
    return data && data[0] === '$';
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `Invalid cashtag: ${validationArguments.object}`;
  }
}

@ValidatorConstraint({ async: true })
export class IsExistingCashTagConstraint implements ValidatorConstraintInterface {
  async validate(cashTag: string, _args: ValidationArguments) {
    let user;
    try {
      user = await prisma.user.findUnique({ where: { cashTag } });
    } catch {}
    return user;
  }
}

export function IsExistingCashTag(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsExistingCashTagConstraint,
    });
  };
}
