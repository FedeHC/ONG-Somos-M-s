export const tokenValidate = () => {
  const token = localStorage.getItem("token");
  let Header = null;

  if (token !== null) {
    Header = {
      "Authorization": "Bearer" + token,
    }
  }
  return Header;
};
