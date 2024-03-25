export const changeUrlDirect = (newUrl) => {
  window.history.replaceState({}, "", newUrl);
};
