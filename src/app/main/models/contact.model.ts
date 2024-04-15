export class Contact {
    id: string;
    nameOfCompany: string;
    email: string;
    message: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || '';
        this.nameOfCompany = obj && obj.nameOfCompany || '';
        this.email = obj && obj.email || '';
        this.message = obj && obj.message || '';
    }
}