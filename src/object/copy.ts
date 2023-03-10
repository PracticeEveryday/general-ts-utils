import { BasicObj } from "../types";

export const copyObj = <T>(obj: T): T | undefined => {
    if(obj && typeof obj === 'object') {
        const copyObj = Object.assign({}, obj)

        return copyObj
    } else {
        TypeError("parameter can be object type")
    }
}

export const deepCopyObject = <T>(obj: T): T | undefined => {
    if (obj && typeof obj === 'object') {
        let copyObj = <any>{};
        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                copyObj[key] = deepCopyObject(obj[key]);
            } else {
                copyObj[key] = obj[key];
            }
        }
        return copyObj;
    } else {
        TypeError("parameter can be object type")
    }
}
