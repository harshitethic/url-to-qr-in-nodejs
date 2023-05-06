const qrcode = require('qrcode-terminal');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', async (url) => {
  console.log('THANKS FOR USING MOZFIRE');
  try {
    await qrcode.generate(url, { small: true });
  } catch (error) {
    console.error(error);
  }
  rl.close();
});
