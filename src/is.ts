export const isNull = (val: unknown): boolean => {
  return val === null;
}

export const isUndefined = (val: unknown): boolean => {
  return val === undefined;
}

export const isString = (str: unknown): boolean => {
  if ( str && typeof str === "string") {
    return true
  } else {
    return false
  }
}

export const isNumber = (num: unknown): boolean => {
  if (num && typeof num === "number") {
    return true
  } else {
    return false
  }
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

export const isEmpty = (val: unknown): boolean => {
  if(val === "" || val === null || val === undefined || ( val !== null && typeof val == "object" && !Object.keys(val).length)){
    return true
  }else{
    return false
  }
};

export const isArrayAndNotEmpty = (arr: unknown[]): boolean => {
  if(arr && Array.isArray(arr) && arr.length) {
      return true
  } else {
      return false
  }
}

export const checkHasKey = <T extends object>(object: T, key: string | number | symbol): key is keyof T => {
  return key in object;
}

export const checkHaveKeyArray = <T extends object>( object: T, keyArray: (string | number | symbol)[]): boolean => {
    return keyArray.every((key) => key in object)
}


export const isCallable = (fn: unknown): fn is Function => {
  return typeof fn === 'function';
}



