export class User {
    firstName = '';
    lastName = '';
    email = '';
    password = '';
    constructor(input: any) {
        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.email = input.email;
        this.password = input.password;
    }

    getFullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }
}

export interface IuserConnect {
    email: string;
    password: string;
}