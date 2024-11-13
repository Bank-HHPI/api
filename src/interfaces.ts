interface Client {
    phone : string;
    mail : string;
    id_client : string;
    passcode : string;
    birthdate : string;
    address : string;
    zipcode : number;
    country : string;
    amount : number;
}
interface Compte {
    id_client : number;
    accountnumber : number;
    amount : number;
    cardnumber : number;
    ccv : number;
    carddate : string;
}
interface Virement {
    id : number;
    senderaccount : number ;
    recieveraccount : number ;
    amount : number ;
    transferdate : Date;
}