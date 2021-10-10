export const tokenValidate = (tokenName) => {
  const token = localStorage.getItem(tokenName);

  if (token !== null) {
    const HeaderAuthorization = {
      Bearer: token,
    };

    return HeaderAuthorization;
  }
};
