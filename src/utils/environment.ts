export const docsEnv = (): boolean => {
  return process.env.GATSBY_ENV === "Docs";
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production";
};
