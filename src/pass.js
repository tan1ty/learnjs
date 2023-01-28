
const all = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password = "";


for (let i = 0; i <= 10; i++) {
  const randomNumber = Math.floor(Math.random() * all.length);
  password += all.substring(randomNumber, randomNumber +1);
 }

