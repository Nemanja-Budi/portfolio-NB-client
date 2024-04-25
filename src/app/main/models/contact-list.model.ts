import { Contact } from "./contact.model";

export class ContactList {
    totalCount: number;
    contacts: Contact[];

    constructor(obj?: any) {
        this.totalCount = obj && obj.totalCount || 0;
        this.contacts = obj && obj.contacts.map((contact: any) => new Contact(contact)) || [];
    }
}