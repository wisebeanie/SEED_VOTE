export interface responseModel {
    isSuccess: boolean;
    code: number;
    message: string;
    result?: any;
}

const response = function response(
    { isSuccess, code, message },
    result?: any,
): responseModel {
    if (result)
        return {
            isSuccess: isSuccess,
            code: code,
            message: message,
            result: result,
        };
    else {
        return {
            isSuccess: isSuccess,
            code: code,
            message: message,
        };
    }
};

const errResponse = function errResponse(
    { isSuccess, code, message },
    result?: any,
): responseModel {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
    };
};

export { errResponse, response };