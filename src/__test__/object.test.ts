import { copyObj, deepCopyObject } from "../object/copy";

interface Address {
    zipCode: number;
    mainAddress: string;
    detailAddress: string;
}

interface Person{
    name: string;
    age: number;
    address: Address
}

const obj: Person = {
    name : "kim",
    age: 29,
    address: {
        zipCode: 11111,
        mainAddress: "관악구 대학동",
        detailAddress: "25길"
    }
}
describe("obj 얕은 복사", () => {
    const obj2 = copyObj<Person>(obj)

    test("obj를 복사하면 값이 동일합니다.", () => {
        expect(obj).toEqual(obj2)
    })

    test("obj와 obj2는 같은 주소를 참조하지 않습니다.", () => {
        expect(obj === obj2).toEqual(false)
    })
})

describe("obj 깊은 복사", () => {
    const obj2 = deepCopyObject<Person>(obj)

    test("obj를 복사하면 값이 동일합니다.", () => {
        expect(obj).toEqual(obj2)
    })

    test("obj와 obj2는 같은 주소를 참조하지 않습니다.", () => {
        expect(obj === obj2).toEqual(false)
    })

    test("obj과 obj2의 같은 주소를 참조하지 않습니다. 깊은 복사가 되었습니다", () => {
        expect(obj === obj2).toEqual(false)
        expect(obj.address === obj2?.address).toEqual(false)
    })

    test("parameter가 객체가 아니면 타입에러를 던집니다.", () => {
        expect(() => deepCopyObject("test")).toThrow(TypeError)
        expect(() => deepCopyObject("test")).toThrow("parameter can be object type")
        expect(() => deepCopyObject(1)).toThrow(TypeError)
        expect(() => deepCopyObject(1)).toThrow("parameter can be object type")
        expect(() => deepCopyObject([1, 2, 3])).toThrow(TypeError)
        expect(() => deepCopyObject([1, 2, 3])).toThrow("parameter can be object type")
        expect(() => deepCopyObject(true)).toThrow(TypeError)
        expect(() => deepCopyObject(true)).toThrow("parameter can be object type")
    })
    
})