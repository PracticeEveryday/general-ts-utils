/**
 * 중복된 원소를 제거하는 함수입니다.
 * @param array 배열
 * @returns 배열 내 중복된 원소를 제거합니다.
 */
export const removeDuplicate = <T>(array: unknown[]): T => {
    if (!Array.isArray(array)) {
        throw TypeError(`parameter must be array type`);
    }

    return <T>[...new Set(array)];
};
