import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PaymentData implements InMemoryDbService {
    createDb() {
        let payments:any[] = [];
        let paymentDetails:any[] = [
            {
                id: 1,
                amount: 16.50,
                currency: 'USD',
                paymentMethods: [
                    { 
                        id: 1, 
                        name: 'VISA',
                        formFields: [
                            { 
                                id: 1,
                                formControlName: 'cardNumber',
                                label: 'Card number',
                                type: 'text',
                                validation: {
                                    required: true,
                                    message: 'Card number is required'
                                }
                            },
                            { 
                                id: 2,
                                formControlName: 'expirationDate',
                                label: 'Expiration date',
                                type: 'text',
                                validation: {
                                    required: true,
                                    message: 'Expiration date is required'
                                }
                            },
                            { 
                                id: 3,
                                formControlName: 'cvc',
                                label: 'CVC',
                                type: 'number',
                                validation: {
                                    required: true,
                                    message: 'CVC is required'
                                }
                            },
                            { 
                                id: 4,
                                formControlName: 'cardHolder',
                                label: 'Card holder',
                                type: 'text',
                                validation: {
                                    required: true,
                                    message: 'Card holder is required'
                                }
                            },
                        ] 
                    },
                    { 
                        id: 2, 
                        name: 'SEPA',
                        formFields: [
                            { 
                                id: 1,
                                formControlName: 'iban',
                                label: 'IBAN',
                                type: 'text',
                                validation: {
                                    required: true,
                                    message: 'IBAN is required'
                                }
                            },
                            { 
                                id: 2,
                                formControlName: 'bic',
                                label: 'BIC',
                                type: 'text',
                                validation: {
                                    required: true,
                                    message: 'BIC is required'
                                }
                            }, 
                            { 
                                id: 3,
                                formControlName: 'holderName',
                                label: 'Holder name',
                                type: 'text',
                                validation: {
                                    required: true,
                                    message: 'Holder name is required'
                                }
                            },
                        ] 
                    }
                ]
            }
        ] 
        return { payments: payments, paymentDetails: paymentDetails };
    }

    genId(payments: any[]): number {
        return payments.length > 0 ? Math.max(...payments.map(payment => payment.id)) + 1 : 1;
    }
}