const isArrayHasData = <T>(arr: T[]): boolean =>
  Array.isArray(arr) && !!arr.length;

const isObjHasData = <T>(obj: T): boolean =>
  Boolean(obj) && !!Object.keys(obj).length;

export { isArrayHasData, isObjHasData };
