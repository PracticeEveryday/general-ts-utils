export interface BasicObj {
    [ property: string]: any
}

export type FilterType<T, Type> = {
    [key in keyof T as T[key] extends Type ? never : key]: T[key];
};
