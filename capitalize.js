let allChairs = 'qwertyuiopasdfghjklzxcvbnm1234567890+-_?!';

arrOfAll = allChairs.match(/\S/g);

function getRandomNum() {
  return Math.floor(Math.random() * 100);
}

getRandomNum();
