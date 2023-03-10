import { copyArray, deepCopyArray } from "../../array/copy";

describe("array 얕은 복사", () => {
    const arr = [1, 2, 3];
    const arr2 = copyArray<number>(arr);

    test("arr을 복사하면 값이 동일합니다.", () => {
        expect(arr).toEqual(arr2);
    });
    test("arr과 arr2의 같은 주소를 참조하지 않습니다..", () => {
        expect(arr === arr2).toEqual(false);
    })
});


describe("array 깊은 복사", () => {
    const arr = [1, 2,[1, 2, 3], { a: "a", b: "b" }, 3];
    const arr2 = deepCopyArray(arr);

    test("arr을 복사하면 값이 동일합니다.", () => {
        expect(arr).toEqual(arr2);
    });
    
    test("arr과 arr2의 같은 주소를 참조하지 않습니다..", () => {
        expect(arr === arr2).toEqual(false);
    })

    test("arr과 arr2의 같은 주소를 참조하지 않습니다. 깊은 복사가 되었습니다.", () => {
        expect(arr === arr2).toEqual(false);
        expect(arr[2] === arr2[2]).toEqual(false);
        expect(arr[3] === arr2[3]).toEqual(false);  
    })
});