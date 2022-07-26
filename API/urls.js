const baseURL="https://be-dalali-app.herokuapp.com"
//localhost:8080

export default urls={
    login:`${baseURL}/api/auth/login`,
    logout:`${baseURL}/api/auth/sign-out`,
    signupCustomer:`${baseURL}/api/auth/sign-up/customer`,
    signupPM:`${baseURL}/api/auth/sign-up/pm`,
    confirmEmail:`${baseURL}/api/user/userverify`,
    confirmEmailResend:`${baseURL}/api/user/re-send-code`,
    forgotPasswordRequest:`${baseURL}/api/auth/request-pass`,
    forgotPasswordResend:`${baseURL}/api/user/re-send-code`,
    newPasswordCode:`${baseURL}/api/auth/reset-password-code`,
    newPasswordBReset:`${baseURL}/api/auth/reset-password`,

    customerForm:`${baseURL}/api/profile/`,
    managerForm:`${baseURL}/api/profile/`,
    companyForm:`${baseURL}/api/profile/`,
    passwordRecovery:`${baseURL}/api/auth/request-pass`
}