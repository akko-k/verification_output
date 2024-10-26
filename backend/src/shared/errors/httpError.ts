export class HttpError extends Error {
  statusCode: number;

  constructor(
    statusCode: number,
    public message: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = message;
  }
}
