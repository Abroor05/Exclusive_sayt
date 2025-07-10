export const setToken = (token) => {
  window.localStorage.setItem("shopToken", token);
};

export const getToken = () => {
  return window.localStorage.getItem("shopToken");
};
