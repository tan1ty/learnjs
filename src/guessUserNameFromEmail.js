function capitalize(str) {
  const upperAll = str.toUpperCase();
  return upperAll.slice(0, 1) + upperAll.slice(1).toLowerCase();
}

function guessUserNameFromEmail(email) {
  const result = email
    .split('@')[0]
    .split('.')
    .map((word) => capitalize(word))
    .join(' ')
    .replace(/[0-9]/g, '');
  return result;
}

const printEmails = (
  userMails = [
    'yombo-tumbo@gg.com',
    'dev@fexnet.com',
    'fovunejad@webgmail.info',
    'ms@bsg.world',
    'support@trig.com',
    'admin@trige.com',
    'zafeni@cryptonet.top',
  ]
) => {
  userMails.forEach((mail) => {
    console.log(`email ${mail}  => ${guessUserNameFromEmail(mail)}`);
  });
};
