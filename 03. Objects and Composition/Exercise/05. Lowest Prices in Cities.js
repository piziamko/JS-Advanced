function lowestInPriceCities(data) {
    let res = {};

    for (let el of data) {
        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if (res.hasOwnProperty(product)) {
            let currentPrice = res[product]["price"];
            if (currentPrice > price) {
                res[product] = { town, price }
            }
        } else {
            res[product] = { town, price }
        }

    }

        for (let [product, value] of Object.entries(res)) {
            console.log(`${product} -> ${value.price} (${value.town})`)
    }

    // console.table(res)
}


lowestInPriceCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
])

// Variant 2 

function solve(array) {
    let obj = {};
    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        obj[product] ? obj[product][town] = price : obj[product] = { [town]: price };
    }

    for (const key in obj) {
        let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

console.log(
    solve([
        "Sample Town | Sample Product | 1000",
        "Sample Town | Orange | 2",
        "Sample Town | Peach | 1",
        "Sofia | Orange | 3",
        "Sofia | Peach | 2",
        "New York | Sample Product | 1000.1",
        "New York | Burger | 10",
    ])
)
