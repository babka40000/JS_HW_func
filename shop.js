let goods = [
    {
        id: 1,
        name: 'Брюки',
        description: 'Брюки',
        sizes: [24, 25, 26],
        price: 5600,
        available: true,
    },

    {
        id: 2,
        name: 'Джинцы',
        description: 'Джинцы',
        sizes: [22, 24, 26, 29],
        price: 4200,
        available: true,
    },

    {
        id: 3,
        name: 'Кроссовки',
        description: 'Кроссовки',
        sizes: [41, 45],
        price: 3500,
        available: true,
    },

    {
        id: 4,
        name: 'Сапоги',
        description: 'Сапоги',
        sizes: [35, 36, 39],
        price: 7800,
        available: true,
    },

    {
        id: 5,
        name: 'Футболка',
        description: 'Футболка',
        sizes: [24, 25, 26, 28],
        price: 1200,
        available: true,
    },
];

let basket = [];

function addGoodToBasket(good, amount) {
    for (let i=0; i<goods.length; i++) {
        if (goods[i].id == good) {
            basket.push({
                good: good,
                amount: amount,
            });
        }
    }
}

function deleteGoodFromBasket(good) {
    for (let i=0; i<basket.length; i++) {
        if (basket[i].good == good) {
            basket.splice(i, 1);
        }
    }
}

function cleanBasket(good) {
    basket = [];
}

function getPrise(good) {
    for (let i=0; i<goods.length; i++) {
        if (goods[i].id == good) {
            return goods[i].price;  
        }
    } 
}

function evalSummAndAmount() {
    let totalSumm = 0;
    let totalAmount = 0;

    for (let i=0; i<basket.length; i++) {
        totalAmount += basket[i].amount;
        totalSumm += basket[i].amount * getPrise(basket[i].good);
    }

    return {
        totalAmount: totalAmount,
        totalSumm: totalSumm, 
    }
}

addGoodToBasket(1, 3);
addGoodToBasket(2, 5);
addGoodToBasket(5, 2);
addGoodToBasket(4, 1);

cleanBasket()
addGoodToBasket(5, 2);
addGoodToBasket(4, 1);

deleteGoodFromBasket(5);
addGoodToBasket(2, 5);

console.log(evalSummAndAmount());