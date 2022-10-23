const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt("Enter your password:")

if (message === null){
    message = 'Скасовано користувачем!';
}
else if (message === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
    
}
else {
    message = 'Доступ заборонений, невірний пароль!';
}
// console.log(message);

alert(message);