export class Users {
    id!: number;
    name!: string;
    age!: number;
    username!: string;
    password!: string;

    constructor(id: number, name: string, age: number, username: string, password: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.username = username;
        this.password = password;
    }
}
