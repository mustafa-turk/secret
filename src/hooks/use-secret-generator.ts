import { useEffect, useState } from "react";

function createRandomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/`~";
  let result = "";
  const randomArray = new Uint8Array(length);
  crypto.getRandomValues(randomArray);
  randomArray.forEach((number) => {
    result += chars[number % chars.length];
  });
  return result;
}

export default function useSecretGenerator(): [
  string,
  number,
  () => void,
  (number: number) => void
] {
  const [secretLength, setSecretLength] = useState(16);
  const [secret, setSecret] = useState("");

  const generateSecret = () => {
    setSecret(createRandomString(secretLength));
  };

  useEffect(() => {
    setSecret(createRandomString(secretLength));
  }, [secretLength]);

  return [secret, secretLength, generateSecret, setSecretLength];
}
