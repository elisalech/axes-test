import categories from "./categories.json";
import paths from "./paths.json";

const request = (value: any, ms: number): Promise<any> =>
  new Promise((res) => setTimeout(() => res(value), ms));

export const getCategories = (): Promise<Object> => request(categories, 250);

export const getPaths = (): Promise<Array<string>> => request(paths, 100);
