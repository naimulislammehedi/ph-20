function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid"; 
    }

    if (otp.length === 8 && otp.startsWith("ph")) {
        return true; 
    }

    return false; 


}

const otpStr = validOtp("ph-10985")
console.log(otpStr); 