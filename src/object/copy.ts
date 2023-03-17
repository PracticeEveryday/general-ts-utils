/**
 * 객체의 최상단만 복사하는 얕은 복사 함수입니다.
 * @param obj 객체
 * @returns 얕은 복사된 객체
 */
export const copyObj = <T>(obj: T): T => {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        const copyObj = Object.assign({}, obj);

        return copyObj;
    } else {
        throw new TypeError('parameter must be object type');
    }
};

/**
 * 객체의 최상단만 복사하는 얕은 복사 함수입니다.
 * @param obj 객체
 * @returns 깊은 복사된 객체
 */
export const deepCopyObj = <T>(obj: T): T => {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
        let copyObj = <T>{};
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                copyObj[key] = deepCopyObj(obj[key]);
            } else {
                copyObj[key] = obj[key];
            }
        }
        return copyObj;
    } else {
        throw new TypeError('parameter must be object type');
    }
};
