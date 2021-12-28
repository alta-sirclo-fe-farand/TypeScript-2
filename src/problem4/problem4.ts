export const flattenArray = (arr: any[]) => {
  return arr.flat(Infinity).filter(elem => elem != null);
};