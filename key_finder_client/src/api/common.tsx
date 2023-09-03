const baseUrl = process.env.REACT_APP_API_URL;

export const makeUrl = (path: string) => {
  return baseUrl + path;
}

