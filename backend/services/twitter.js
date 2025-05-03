export const getBearerToken = () => {
  const token = process.env.TWITTER_BEARER_TOKEN;
  return token;
};
