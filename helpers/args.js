export const getArgs = (args) => {
  const result = {};
  const [, , ...rest] = args;

  rest.forEach((value, index, array) => {
    if (value.startsWith('-')) {
      const key = value.replace('-', '');
      const nextValue = array.at(index + 1);

      if (nextValue && !nextValue.startsWith('-')) {
        return (result[key] = nextValue);
      }

      return (result[key] = true);
    }
  });

  return result;
};
