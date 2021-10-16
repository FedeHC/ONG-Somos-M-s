export const tokenValidate = (tokenName) => {
  const token = localStorage.getItem(tokenName);

  if (token !== null) {
    const Header = {
      " Authorization": "Bearer" + token,
    };
    return Header;
  } else {
    const Header = null;
    return Header;
  }
};
