let input;
let total = 0;
let number = 5;

for (let i = 0; input !== null; i += 1) {
  input = prompt("Enter a number:");
  number = input;

  
  if (isNaN(number)) // if (typeof number !== 'number')
  {
    alert('Було написано не число, спробуйте ще раз')
    
  }
  else {
   number = Number(number)
     total = (total + number);
    
   }
}
alert(`Загальна сума чисел дорівнює ${total}`)
input === null;
