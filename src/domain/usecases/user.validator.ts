import { User } from "./user.entity";

export const EMAIL_REGEX = /^[\w-]{5,}@.*$/;

export const parseUser = (user: User) => {
  const { name, email, password, passwordConfirmation } = user;
  if (!name) return null;
  if (!email) return null;
  if (!password) return null;
  if (!passwordConfirmation) return null;
  if (password !== passwordConfirmation) return null;
  if (!email.match(EMAIL_REGEX)) return null;
  return user;
};
