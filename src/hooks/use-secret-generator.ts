import { useEffect, useState } from "react";

import createRandomString from "@/helpers/create-random-string";

import { SECRET_LENGTH } from "@/constants";

export default function useSecretGenerator(): [
  string,
  number,
  () => void,
  (number: number) => void
] {
  const [secretLength, setSecretLength] = useState<number>(SECRET_LENGTH.SHORT);
  const [secret, setSecret] = useState<string>("");

  const generateSecret = () => {
    setSecret(createRandomString(secretLength));
  };

  useEffect(() => {
    setSecret(createRandomString(secretLength));
  }, [secretLength]);

  return [secret, secretLength, generateSecret, setSecretLength];
}
