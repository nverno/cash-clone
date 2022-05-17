export const isPhoneNumber = (input: string) =>
  /^(1\d{10}|^[^1]\d{9})$/.test(input);
