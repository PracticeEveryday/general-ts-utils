/**
 * 두 배열의 요소 값들이 일치하면 true 를 반환하고 일치하지 않으면 false를 반환함
 * @param arr1 비교할 배열1
 * @param arr2 비교할 배열2
 * @returns Boolean
 */
export const equelArray = (arr1: unknown[], arr2: unknown[]): boolean => {
    if (arr1 === arr2) return true;
    if (arr1.length !== arr2.length) return false;

    const condition = arr1.every((v) => arr2.find((v2) => v2 === v));
    if (condition) {
        return true;
    }

    return false;
};
