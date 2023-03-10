interface BasicObj {
    [ property: string]: any
}

export function copyObj<T>(obj: T): T {
    if(!(obj instanceof Object)) TypeError("parameter can be object type")
    const copyObj = Object.assign({}, obj)

    return copyObj
}

// export function deepCopyObject<T>(obj: T): T {
//     if (!(obj instanceof Object)) TypeError("parameter can be object type")
    
//     let copyObj = <T>{};
    
//     for (const key in obj) {
//         if (typeof obj[key] === "object" && obj[key] !== null) {
//         copyObj[key] = deepCopyObject(obj[key]);
//         } else {
//         copyObj[key] = obj[key];
//         }
//     }

//   return copyObj;
// }


export function deepCopyObject(obj: BasicObj) {
    if (obj && typeof obj === 'object') {
        let copyObj = <BasicObj>{};
        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                copyObj[key] = deepCopyObject(obj[key]);
            } else {
                copyObj[key] = obj[key];
            }
        }
        return copyObj;
    }
    TypeError("parameter can be object type")
}
