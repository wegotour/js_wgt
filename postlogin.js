function responseData(result) {
    alert(result.message);
    
    if (result.message === "Selamat Datang") {
        setCookieWithExpireHour("token", result.token, 2);
        window.location.href = "index.html"; 
    } else if (result.message === "Password Salah") {
        window.location.href = "login.html";
    } else {
        return false;
    }
}

document.getElementById("button").addEventListener("click", Login);