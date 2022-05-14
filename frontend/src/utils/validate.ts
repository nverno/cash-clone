export const isPhoneNumber = (input: string) => /^1?\d{10}$/.test(input);

export const splitPhoneNumber = (input: string) => {
  const res = new Array(4);
  if (input.length > 10 && input[0] === '1') {
    res[0] = input[0];
    input = input.slice(1);
  }
  res[1] = input.slice(0, 3);
  res[2] = input.length > 3 ? input.slice(3, 6) : undefined;
  res[3] = input.length > 6 ? input.slice(6, 10) : undefined;
  return res;
};
