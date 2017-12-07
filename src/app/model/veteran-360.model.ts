export class VeteranProfile {
    id:number;
    firstName: string;
    lastName: string;
    memberNumber: string;
    ssnLast4: string;
    dateOfBirth: string;
    dateOfDeath: string;
    gender: string;
    age: string;
    emailAddress: string;
    vamc: string;
    program: string;
    additionalEmailAddress; string;
    subscriptionType: string;
    countOfAuths: number;
    phones: Phone[];
    addresses: Address[];
    hippaAlerts: HippaAlert[]
}

export class Phone{
    phoneNumber: string;
    phoneType: string;
}

export class Address {
    id: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    addressType: string;
}

export class HippaAlert {
    id: number;
    alertType: string;
    beginOn: string;
    endOn: string;
    message: string;
}