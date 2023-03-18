export interface BasicObj {
    [property: string]: any;
}

/**
 * 제네릭 타입으로 <param1, param2> 받은 인자들 중
 * param1 의 프로퍼티 중에 param2 타입을 가진 것이 있으면 제외합니다.
 */
export type FilterType<T, Type> = {
    [key in keyof T as T[key] extends Type ? never : key]: T[key];
};

/**
 * 해당 타입의 프로퍼티를 변경하지 못하도록합니다.
 */
export type MakeReadonlyType<T> = {
    readonly [key in keyof T]: T[key];
};

/**
 * 해당 타입의 프로퍼티들을 모두 Optional로 바꿉니다.
 */
export type MakePartialType<T> = {
    [key in keyof T]?: T[key];
};

/**
 * 제네릭 타입으로 <param1, param2>
 * param2 가 param1 의 서브 타입인 것들만 반환합니다.
 */
export type MakePickType<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * 프로퍼티 타입드를 T로 세팅합니다.
 * Construct a type with a set of properties K of type T
 */
export type MakeRecordType<K extends string, T> = {
    [P in K]: T;
};

/**
 * 모든 프로퍼티들이 null을 받을 수 있는 타입이 됩니다.
 */
export type NullableObj<T> = {
    [key in keyof T]: T[key] | null;
};

/**
 * 모든 타입들이 string 타입이 되도록 만듭니다.
 */
export type StringifyObj<T> = {
    [key in keyof T]: string;
};
