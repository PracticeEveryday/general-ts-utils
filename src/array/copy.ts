import { deepCopyObject } from "../object/copy"

export function copyArray<T>(arr: T[]): T[] {
    if(!Array.isArray(arr)) TypeError("parameter can be array type")
    const copyArr = arr.slice()

    return copyArr
};


export function deepCopyArray(arr: any[]): any {
    if (!Array.isArray(arr)) TypeError("parameter can be array type")

    if (arr.length === 0) return []

    const copyArray = arr.map((value) => {
        if (value instanceof Object) { 
            return deepCopyObject(value)
        } else if (Array.isArray(value)) {
            return deepCopyArray(value)
        }
        else {
            return value
        }
    })

    return copyArray
}