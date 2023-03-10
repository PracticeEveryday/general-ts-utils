export interface Address {
    zipCode: number;
    mainAddress: string;
    detailAddress: string;
}

export interface Person{
    name: string;
    age: number;
    address: Address
}