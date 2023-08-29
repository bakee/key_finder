const baseUrl = "https://localhost:7048/api";

export const makeUrl = (path: string) => {
  return baseUrl + path;
}

