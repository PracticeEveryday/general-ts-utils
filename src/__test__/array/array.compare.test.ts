import { equelArray } from '../../array/compare';

describe('두 배열이 같은 요소를 가지는 지 확인', () => {
    test('두 배열의 요소가 같으면 true를 반환합니다.', () => {
        expect(equelArray([1, 2, 3], [1, 3, 2])).toEqual(true);
        expect(equelArray(['1', 2, true], ['1', 2, true])).toEqual(true);
    });
    test('두 배열의 요소가 다르면 true를 반환합니다.', () => {
        expect(equelArray([1, 2, 3], [1, 2, 3, 4])).toEqual(false);
        expect(equelArray([1, 2, 3], [1, 2, '3'])).toEqual(false);
        expect(equelArray([1, 2, 3], [1, 2, true])).toEqual(false);
    });
});
