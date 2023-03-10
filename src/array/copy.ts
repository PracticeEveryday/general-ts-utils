import { deepCopyObj } from "../object/copy"
import { isArray } from "./is"

export const copyArray = <T>(arr: T[]): T[] => {
    if(!Array.isArray(arr)) throw new TypeError("parameter must be array type")
    const copyArr = arr.slice()

    return copyArr
};


export const deepCopyArray = (arr: unknown[]): any => {
    if (!Array.isArray(arr)) throw new TypeError("parameter must be array type")

    if (arr.length === 0) return []

    const copyArray = arr.map((value) => {
        if (isArray(value)) {
            return deepCopyArray(value)
        } else if (typeof value === "object") { 
            return deepCopyObj(value)
        } else {
            return value
        }
    })

    return copyArray
}