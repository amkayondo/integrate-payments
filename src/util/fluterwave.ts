
export const config = (ammount: number) => ({
    public_key: 'FLWPUBK_TEST-cbeaf6832f5544-X',
    tx_ref: `JSKLA-${new Date}`,
    amount: ammount,
    currency: 'UGX',
    payment_options: 'card,mobilemoney,ussd,bank',
    customer: {
        email: 'kayondoedward13@gmail.com',
        phone_number: '0752048100',
        name: 'kayondo edward',
    },
    customizations: {
        title: 'one time product',
        description: 'Payment for items in cart',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
})
