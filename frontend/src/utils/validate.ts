export const isPhoneNumber = (input: string) =>
  /^(1\d{10}|[02-9]\d{9})$/.test(input);
