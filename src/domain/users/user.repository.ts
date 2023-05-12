import { User } from "./user.entity";

export const findByEmail = async (
  email: string
): Promise<Partial<User> | null> => {
  console.log("EMAIL=>", email);

  return email
    ? Promise.resolve({
        _id: 1,
        email: "username@mail.com",
        name: "username",
        password: "hashedPassword",
      })
    : null;
};
