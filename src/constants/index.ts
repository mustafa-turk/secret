export const SECRET_TYPES = {
  SHORT: "Short",
  MEDIUM: "Medium",
  LONG: "Long",
} as const;

export const SECRET_LENGTH = {
  SHORT: 16,
  MEDIUM: 32,
  LONG: 64,
} as const;

export type SecretType = keyof typeof SECRET_TYPES;
