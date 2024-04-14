export class Contact {
    id: string;
    name: string;
    email: string;
    message: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || '';
        this.name = obj && obj.name || '';
        this.email = obj && obj.email || '';
        this.message = obj && obj.message || '';
    }
}