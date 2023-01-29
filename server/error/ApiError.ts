class ApiError extends Error {
  private _status: number;

  get status() {
    return this._status;
  }

  constructor(status: number, message: string) {
    super();
    this._status = status;
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApiError(404, message);
  }

  static internal(message: string) {
    return new ApiError(500, message);
  }

  static forbidden(message: string) {
    return new ApiError(403, message);
  }
}

module.exports = ApiError;
