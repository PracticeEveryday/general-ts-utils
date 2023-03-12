export const isNull = (val: unknown): boolean => {
  return val === null;
}

export const isUndefined = (val: unknown): boolean => {
  return val === undefined;
}

export const isString = (str: unknown): boolean => {
  return typeof str === "string";
}

export const isNumber = (num: unknown): boolean => {
  return typeof num === "number";
}

export const isBoolean = (bool: unknown): boolean => {
  return typeof bool === "boolean";
}

export const isArray = (arr: unknown[]): boolean => {
  if(arr && Array.isArray(arr)) {
      return true
  } else {
      return false
  }
}

export const isArrayAndNotEmpty = (arr: unknown[]): boolean => {
  if(arr && Array.isArray(arr) && arr.length) {
      return true
  } else {
      return false
  }
}