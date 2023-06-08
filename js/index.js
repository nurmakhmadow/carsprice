let cars = [17000,37000,13000,12000,14000,5000,10000,43000,80000,2000,2000]

let from = +prompt('from')
let up = +prompt ('up')

let totalPrice = cars.filter(cash => {
    if (cash >= from && cash <= up ){
        return cash
    }
})

console.log(
    totalPrice
);