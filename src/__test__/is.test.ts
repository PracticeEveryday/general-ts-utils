import { isArray, isArrayAndNotEmpty, isNull, isBoolean, isNumber, isString, isUndefined, isEmpty } from "../is"


describe("null 값 체크", () => {
  test("null 값이 들어오지 않으면 false를 뱉어냅니다.", () => {
    expect(isNull("test")).toBe(false)
    expect(isNull(true)).toBe(false)
    expect(isNull(1)).toBe(false)
    expect(isNull({ a: "a" })).toBe(false)
    expect(isNull([1])).toBe(false)
  })

  test("null 값이 들어오면 true를 뱉어냅니다.", () => {
    expect(isNull(null)).toBe(true)
  })
})

describe("배열인지 아닌 지 확인합니다.", () => {
  test("배열이면 true를 반환합니다.", () => {
      expect(isArray([1, 2, 3])).toBe(true)
      expect(isArray([1, "2", 3])).toBe(true)
      expect(isArray([1, 2, true])).toBe(true)
  })
})

describe("빈 배열이 아닌 지 확인합니다.", () => {
  test("배열이 비어 있지 않으면 true를 반환합니다..", () => {
      expect(isArrayAndNotEmpty([1, 2, 3])).toBe(true)
      expect(isArrayAndNotEmpty([1, "2", 3])).toBe(true)
      expect(isArrayAndNotEmpty([1, 2, true])).toBe(true)
  })

  test("배열이 아니거나 비어 있으면 false를 반환합니다..", () => {
      expect(isArrayAndNotEmpty([])).toBe(false)
  })
})

describe("String 값 체크", () => {
  test("String 값이 들어오지 않으면 false를 뱉어냅니다.", () => {
    expect(isString(null)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString({ a: "a" })).toBe(false)
    expect(isString([1])).toBe(false)
    expect(isString(undefined)).toBe(false)
  })

  test("String 값이 들어오면 true를 뱉어냅니다.", () => {
    expect(isString("test")).toBe(true)
    
  })
})

describe("Number 값 체크", () => {
  test("Number 값이 들어오지 않으면 false를 뱉어냅니다.", () => {
    expect(isNumber(null)).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber({ a: "a" })).toBe(false)
    expect(isNumber([1])).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber("test")).toBe(false)
  })

  test("Number 값이 들어오면 true를 뱉어냅니다.", () => {
    expect(isNumber(1)).toBe(true)
  })
})

describe("Boolean 값 체크", () => {
  test("Boolean 값이 들어오지 않으면 false를 뱉어냅니다.", () => {
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean({ a: "a" })).toBe(false)
    expect(isBoolean([1])).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean("test")).toBe(false)
  })

  test("Boolean 값이 들어오면 true를 뱉어냅니다.", () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })
})

describe("Undefined 값 체크", () => {
  test("Undefined 값이 들어오지 않으면 false를 뱉어냅니다.", () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(1)).toBe(false)
    expect(isUndefined({ a: "a" })).toBe(false)
    expect(isUndefined([1])).toBe(false)
    expect(isUndefined(true)).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined("test")).toBe(false)
  })

  test("Undefined 값이 들어오면 true를 뱉어냅니다.", () => {
    expect(isUndefined(undefined)).toBe(true)  
  })
})

describe("값이 비었는지 체크합니다.", () => {
  test("값이 비어있으면 true를 뱉어냅니다. 비어있는 값 : '', null, undefined, [], {}", () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
  })

  test("값이 비어있지 않으면 false를 뱉어냅니다.", () => {
    expect(isEmpty(1)).toBe(false)
    expect(isEmpty("test")).toBe(false)
    expect(isEmpty([1, 2, 3])).toBe(false)
    expect(isEmpty({ a: "a", b: "b"})).toBe(false)
  })
})