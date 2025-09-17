let products = [
    {
        sku: "F-001",
        name: "strawberry",
        category: "fruit",
        price: 10,
        inventory: 20
    },
    {
        sku: "V-002",
        name: "lettuce",
        category: "vegetable",
        price: 6,
        inventory: 30
    },
    {
        sku: "F-003",
        name: "blueberry",
        category: "fruit",
        price: 8,
        inventory: 25
    },
    {
        sku: 'V-004',
        name: "asparagus",
        category: "vegetable",
        price: 4,
        inventory: 40 
    },
    {
        sku: "D-005",
        name: "milk",
        category: "dairy",
        price: 20,
        inventory: 50
    }
];

for (let product of products) {
    let discount=0;

    switch (product.category) {
        case "fruit":
            discount = .05;
            break;
        case "vegetable":
            discount = .1;
            break;
        case "dairy":
            discount = .1;
            break;
            default: 0;
                discount = 0;
    };
    let promoPrice = product.price * (1 - discount);
    product.promoPrice = promoPrice
}

console.log(products)