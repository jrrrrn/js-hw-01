let credits = 23580;
const pricePerDroid = 3000;
const message = prompt("How many do you want to buy?");
let numberOfDroids = message;
numberOfDroids = Number(numberOfDroids);
let totalPrice;



if (message === null) {
    console.log('Скасовано користувачем!');
}
else  {
    totalPrice = (numberOfDroids * pricePerDroid);
    if (totalPrice > credits) {
console.log('Недостатньо коштів на рахунку!')
    }
    else {
        credits = (credits - totalPrice);
        console.log(`Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${credits} кредитів.`)
    }
}