import { isArray } from '../is';
import { deepCopyObj } from '../object/copy';

/**
 * 배열의 최상단만 복사하는 얕은 복사 함수입니다.
 * @param arr 배열
 * @returns 얕은 복사 된 배열
 */
export const copyArray = <T>(arr: T[]): T[] => {
    if (!Array.isArray(arr)) throw new TypeError('parameter must be array type');
    const copyArr = arr.slice();

    return copyArr;
};

/**
 * 배열이 같은 참조를 가지지 않도록 깊은 복사 함수입니다.
 * @param arr 배열
 * @returns 깊은 복사 된 배열
 */
export const deepCopyArray = (arr: unknown[]): any => {
    if (!Array.isArray(arr)) throw new TypeError('parameter must be array type');

    if (arr.length === 0) return [];

    const copyArray = arr.map((value) => {
        if (isArray(value)) {
            return deepCopyArray(value);
        } else if (typeof value === 'object') {
            return deepCopyObj(value);
        } else {
            return value;
        }
    });

    return copyArray;
};
