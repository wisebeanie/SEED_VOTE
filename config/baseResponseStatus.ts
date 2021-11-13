export class ResponseMessage {
    SUCCESS = { isSuccess: true, code: 1000, message: '성공' }

    // common
    TOKEN_VERIFICATION_FAILURE = {
        isSuccess: false,
        code: 3000,
        message: 'JWT 토큰 검증 실패',
    }
    TOKEN_VERIFICATION_SUCCESS = {
        isSuccess: true, 
        code: 1001,
        message: "JWT 토큰 검증 성공"
    }

    // response
    DUPLICATED_USER = {
        isSuccess: false,
        code: 3001,
        message: "이미 가입된 유저입니다."
    }

    DB_ERROR = { isSuccess: false, code: 4000, message: '데이터 베이스 에러' }
    SERVER_ERROR = { isSuccess: false, code: 4001, message: '서버 에러' }
}