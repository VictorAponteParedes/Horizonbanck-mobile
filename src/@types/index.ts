
export type Card = {
    id: number;
    cardNumber: string;
    accountNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvv: string;
    isActive: boolean;
    user: UserData

}


export type UserData = {
    name: string;
    lastName: string;
    profileImage?: string;
    email: string;
    identityCard: string;
    password: string;
    isActive?: boolean;
    cards?: Card[];
}

export type InputCustomType = {
    placeholderText: string;
    placeholderColor?: string;
    control: any;
    name: string;
    secureTextEntry?: boolean;
};