export default interface User {
    name: string;
    picture: string;
    job: string;
    age: number;
    isAvailable: boolean;
    email?: string;
    phone?: number;
    address?: string;
}