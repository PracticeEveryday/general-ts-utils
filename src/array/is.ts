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