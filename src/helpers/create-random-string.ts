export default function createRandomString(length: number): string {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

  const getRandomChar = (chars: string) => {
    const randomIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % chars.length;
    return chars[randomIndex];
  };

  const password = [
    getRandomChar(uppercaseChars),
    getRandomChar(lowercaseChars),
    getRandomChar(digits),
    getRandomChar(specialChars),
  ];

  const allChars = uppercaseChars + lowercaseChars + digits + specialChars;
  for (let i = password.length; i < length; i++) {
    password.push(getRandomChar(allChars));
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}
