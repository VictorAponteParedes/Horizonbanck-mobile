
export type Tarjeta = {
    id: number;
    cardNumber: string; // Número de la tarjeta
    cardHolderName: string; // Nombre del titular (puedes optar por relacionar con User)
    expirationDate: string; // Fecha de vencimiento (ej: MM/YY)
    // Evita devolver el CVV por seguridad
    cvv: string; // Código de seguridad
    cardType: string; // Tipo de tarjeta (ej: Visa, MasterCard)
    bankName: string; // Nombre del banco emisor
    balance: number; // Balance actual de la tarjeta
    isActive: boolean;

}

export type UserData = {
    firstName: string;
    lastName: string;
    isActive: boolean;
    profileImage: string;
    email: string;
    password: string;
    tarjetas?: Tarjeta[];
}

export type InputCustomType = {
    placeholderText: string;
    placeholderColor?: string;
    control: any;
    name: string;
    secureTextEntry?: boolean;
  };