/**
 * Simple Exception class to return [message, name] as an error
 */
class ValidationException {
    constructor(message) {
        this.message = message;
        this.name = "ValidationException";
    }
}

export { ValidationException };
