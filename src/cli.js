import readFileSync from 'readline-sync';

const showUsernameRequestDialog = () => {
  const userName = readFileSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default showUsernameRequestDialog;
