class AppError extends Error {
  statusCode: number;
  status: string;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    // Prevent error stack printing
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
