import { isNull } from "../../null/is";

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
