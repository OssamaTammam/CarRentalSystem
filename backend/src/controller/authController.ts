import { NextFunction } from "express";
import dbPool from "../utils/databaseConnect";
import { hashPassword } from "../utils/passwordHashing";

exports.signUp = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) {
    next("error");
  }

  const result = await dbPool.execute(
    "INSERT INTO user (username,first_name,last_name,birth_date,address,email,password_hash,phone_number,role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.username,
      req.body.firstName,
      req.body.lastName,
      req.body.birthDate,
      req.body.address,
      req.body.email,
      hashPassword(req.body.password),
      req.body.phoneNumber,
      req.body.role,
    ],
  );
};
