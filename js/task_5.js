console.log('Доступні країни : Китай, Чилі, Австралія, Індія, Ямайка')
const prices = [100, 250, 170, 80, 120];
const country = prompt("Enter the country you want to arrange delivery to");
const countryToDeliver = country.toLowerCase(); 

let price;

switch (countryToDeliver) {
    
    case "китай":
        price = prices[0];
        alert(`Доставка в ${countryToDeliver} буде коштувати ${price} кредитів`)
        break;
     case "чилі":
        price = prices[1];
        alert(`Доставка в ${countryToDeliver} буде коштувати ${price} кредитів`)
        break;
     case "австралія":
        price = prices[2];
        alert(`Доставка в ${countryToDeliver} буде коштувати ${price} кредитів`)
        break;
     case "індія":
        price = prices[3];
        alert(`Доставка в ${countryToDeliver} буде коштувати ${price} кредитів`)
        break;
     case "ямайка":
        price = prices[4];
        alert(`Доставка в ${countryToDeliver} буде коштувати ${price} кредитів`)
        break;
        
default: 
alert("У вашій країні доставка недоступна");
}
