export const tokenValidate = (tokenName=process.env.REACT_APP_NGO_TOKEN) => {
  const token = localStorage.getItem(tokenName);
  let Header = null;

  if (token !== null) {
    Header = {
      "Authorization": "Bearer" + token,
    }
  }
  return Header;
};
