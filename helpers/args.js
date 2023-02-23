export const getArgs = (args) => {
  const [, , ...rest] = args;

  return rest.reduce((acc, value, index, array) => {
    if (value.startsWith('-')) {
      const key = value.replace('-', '');
      const nextValue = array.at(index + 1);

      if (nextValue && !nextValue.startsWith('-')) {
        return { ...acc, [key]: nextValue };
      }

      return { ...acc, [key]: true };
    }

    return acc;
  }, {});
};
