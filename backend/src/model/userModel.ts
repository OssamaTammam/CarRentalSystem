class User {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  address: string;
  email: string;
  hashedPassword: string;
  phoneNumber: string;
  role: "Admin" | "User";
  jwt?: string;

  constructor(
    userId: number,
    username: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    address: string,
    email: string,
    hashedPassword: string,
    phoneNumber: string,
    role: "Admin" | "User",
    jwt?: string,
  ) {
    this.userId = userId;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.address = address;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.phoneNumber = phoneNumber;
    this.role = role;
    this.jwt = jwt;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
