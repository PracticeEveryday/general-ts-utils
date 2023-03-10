import { isArray, isArrayAndNotEmpty } from "../../array/is";

describe("배열인지 아닌 지 확인합니다.", () => {
    test("배열이면 true를 반환합니다.", () => {
        expect(isArray([1, 2, 3])).toBe(true)
        expect(isArray([1, "2", 3])).toBe(true)
        expect(isArray([1, 2, true])).toBe(true)
    })

    test("배열이 아니면 flase를 반환합니다..", () => {
        expect(isArray(1)).toBe(false)
        expect(isArray({a: "a"})).toBe(false)
        expect(isArray(false)).toBe(false)
        expect(isArray("hello")).toBe(false)
    })
})

describe("빈 배열이 아닌 지 확인합니다.", () => {
    test("배열이 비어 있지 않으면 true를 반환합니다..", () => {
        expect(isArrayAndNotEmpty([1, 2, 3])).toBe(true)
        expect(isArrayAndNotEmpty([1, "2", 3])).toBe(true)
        expect(isArrayAndNotEmpty([1, 2, true])).toBe(true)
    })

    test("배열이 아니거나 비어 있으면 false를 반환합니다..", () => {
        expect(isArrayAndNotEmpty(1)).toBe(false)
        expect(isArrayAndNotEmpty({a: "a"})).toBe(false)
        expect(isArrayAndNotEmpty(false)).toBe(false)
        expect(isArrayAndNotEmpty("hello")).toBe(false)
        expect(isArrayAndNotEmpty([])).toBe(false)
    })
})