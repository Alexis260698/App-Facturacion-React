export const invoice = {
    id: 10,
    name: 'Componentes Pc',
    client: {
        name: 'Pepe',
        lastname: 'pecas',
        address: {
            country: 'Mexico',
            city: 'CDMX',
            street: 'Benito Juarez',
            number: 166
        }
    },
    company: {
        name: 'DDTECH',
        fiscalNumber: 1275678
    },
    items: [
        {
            id:1,
            product: 'Audifonos Hyperx',
            prize: 2000,
            quantity: 1
        },
        {
            id:2,
            product: 'Corsair Keyboard',
            prize: 1999,
            quantity: 1
        },
        {
            id:3,
            product: 'Monitor Samsung',
            prize: 5000,
            quantity: 1
        }
        
    ]

}