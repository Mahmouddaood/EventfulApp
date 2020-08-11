export const validatePhone = (phone: string | number | any) => {
  const filter = /^[+]?([0-9] ?){6,14}[0-9]$/;
  return filter.test(phone);
};

export const validateEmail = (email: string) => {
  const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return filter.test(email);
};

export const validatePasswordLength = (pass: string) =>
  pass && pass.length >= 5;

export const isPasswordsMatch = (pass: string, confirm: string) => {
  return pass && confirm && pass === confirm;
};
