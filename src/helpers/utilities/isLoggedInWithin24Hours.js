export const isLoggedInWithin24Hours = (timestamp) => {
  const now = new Date();
  const diff = now.getTime() - timestamp;
  const diffHours = diff / (1000 * 60 * 60);
  return diffHours < 24;
};
