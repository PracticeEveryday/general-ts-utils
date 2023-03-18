export interface BasicObj {
    [property: string]: any;
}

export type FilterType<T, Type> = {
    [key in keyof T as T[key] extends Type ? never : key]: T[key];
};

export type MakeReadonlyType<T> = {
    readonly [key in keyof T]: T[key];
};

/**
 * Make all properties in T optional
 */
export type MakePartialType<T> = {
    [key in keyof T]?: T[key];
};

/**
 * From T pick a set of properties K
 */
export type MakePickType<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
export type MakeRecordType<K extends string, T> = {
    [P in K]: T;
};

/**
 * Make all properties in T nullable
 */
export type NullableObj<T> = {
    [key in keyof T]: T[key] | null;
};

/**
 * Turn all properties of T into strings
 */
export type StringifyObj<T> = {
    [key in keyof T]: string;
};
