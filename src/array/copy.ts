import { deepCopyObject } from "../object/copy"

export function copyArray<T>(arr: T[]): T[] {
    if(!Array.isArray(arr)) throw new TypeError("parameter can be array type")
    const copyArr = arr.slice()

    return copyArr
};


export function deepCopyArray(arr: unknown[]): any {
    if (!Array.isArray(arr)) throw new TypeError("parameter can be array type")

    if (arr.length === 0) return []

    const copyArray = arr.map((value) => {
        if (Array.isArray(value)) {
            return deepCopyArray(value)
        } else if (typeof value === "object") { 
            return deepCopyObject(value)
        } else {
            return value
        }
    })

    return copyArray
}