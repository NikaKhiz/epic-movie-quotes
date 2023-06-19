export const isBackEndErrors = (response) => {
  const errors = {
    name: [],
    email: [],
  };
  if (response.data.errors) {
    for (const error in response.data.errors) {
      if (Object.hasOwnProperty.call(errors, error)) {
        response.data.errors[error].forEach((element) => {
          errors[error] = [...errors[error], element];
        });
      }
    }
  }
  return errors;
};
