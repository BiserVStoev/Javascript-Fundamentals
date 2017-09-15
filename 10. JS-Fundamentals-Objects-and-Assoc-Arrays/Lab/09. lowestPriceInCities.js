function lowestPrice(input) {
    let Products = new Map();

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(/\s+\|\s+/g);
        let town = current[0];
        let product = current[1];
        let price = current[2];

        if (!Products.has(product)) {
            Products.set(product, new Map);
            Products.get(product).set(town, Number(price))
        }

        if(!Products.get(product).has(town)){
            Products.get(product).set(town, Number(price));
        } else {
            let currentPrice = Products.get(product).get(town);
            if(currentPrice > Number(price)){
                Products.get(product).set(town, Number(price));
            }
        }
    }
    for (let [product,towns] of Products) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';

        for (let [town, price] of towns) {
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);