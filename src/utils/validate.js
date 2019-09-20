export const required = value => (value ? undefined : 'required');

export const numbers = (value) => {
  const onlyNum = new RegExp(/^[0-9]+$/);
  return onlyNum.test(value) ? undefined : 'onlyNumbers';
};
