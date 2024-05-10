export class Contact {
    id: string;
    firstName: string;
    lastName: string;
    nameOfCompany: string;
    email: string;
    message: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || '';
        this.firstName = obj && obj.firstName || '';
        this.lastName = obj && obj.lastName || '';
        this.nameOfCompany = obj && obj.nameOfCompany || '';
        this.email = obj && obj.email || '';
        this.message = obj && obj.message || '';
    }
}