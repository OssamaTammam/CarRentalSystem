class User {
  constructor(
    userId,
    username,
    firstName,
    lastName,
    birthDate,
    address,
    email,
    hashedPassword,
    phoneNumber,
    role,
    jwt,
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

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = User;
