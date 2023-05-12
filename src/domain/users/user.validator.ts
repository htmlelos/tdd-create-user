import { User } from "./user.entity";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
