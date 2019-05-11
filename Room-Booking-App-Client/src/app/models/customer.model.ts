export class Customer {
    sin: string;
    givenName: string;
    familyName: string;
    streetName: string;
    streetNumber: number;
    city: string;
    state: string;
    country: string;

    public getName(): string {
        return this.givenName + ' ' + this.familyName;
    }

    public getAddress(): string {
        return this.streetNumber + ' ' + this.streetName + ', ' + this.city + ', ' + this.state + ', ' + this.country;
    }
}