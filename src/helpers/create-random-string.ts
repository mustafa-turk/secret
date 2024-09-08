export default function createRandomString(length: number) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  const getRandomChar = (charset: string) =>
    charset[Math.floor(Math.random() * charset.length)];

  let password = [
    getRandomChar(lowerCase),
    getRandomChar(upperCase),
    getRandomChar(numbers),
    getRandomChar(specialChars),
  ];

  const allChars = lowerCase + upperCase + numbers + specialChars;

  for (let i = password.length; i < length; i++) {
    password.push(getRandomChar(allChars));
  }
  password = password.sort(() => Math.random() - 0.5);
  return password.join("");
}
