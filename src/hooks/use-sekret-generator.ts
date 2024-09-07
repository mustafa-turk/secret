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

export default function useSekretGenerator(): [
  string,
  number,
  (number: number) => void
] {
  const [sekretLength, setSekretLength] = useState(16);
  const [sekret, setSekret] = useState("");

  useEffect(() => {
    const generatedSekret = createRandomString(sekretLength);
    setSekret(generatedSekret);
  }, [sekretLength]);

  return [sekret, sekretLength, setSekretLength];
}
