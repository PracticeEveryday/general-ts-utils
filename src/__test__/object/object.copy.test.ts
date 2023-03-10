import { copyObj, deepCopyObj } from "../../object/copy";
import { Person } from "../interfaces";

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
    const obj2 = deepCopyObj<Person>(obj)

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
        expect(() => deepCopyObj("test")).toThrow(TypeError)
        expect(() => deepCopyObj("test")).toThrow("parameter must be object type")
        expect(() => deepCopyObj(1)).toThrow(TypeError)
        expect(() => deepCopyObj(1)).toThrow("parameter must be object type")
        expect(() => deepCopyObj([1, 2, 3])).toThrow(TypeError)
        expect(() => deepCopyObj([1, 2, 3])).toThrow("parameter must be object type")
        expect(() => deepCopyObj(true)).toThrow(TypeError)
        expect(() => deepCopyObj(true)).toThrow("parameter must be object type")
    })
    
})