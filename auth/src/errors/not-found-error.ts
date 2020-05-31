import { CustomError } from "./custom-errors";

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Route not found';

  constructor(public message: string) {
    super('Route not found');
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
