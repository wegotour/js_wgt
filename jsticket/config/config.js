import {
    setCookieWithExpireHour
} from 'https://jscroot.github.io/cookie/croot.js';

//token api
export function getTokenFromAPI() {
    const tokenUrl = "https://asia-southeast2-wegotour-403712.cloudfunctions.net/wegotourloginadminbaru";
    fetch(tokenUrl)
        .then(response => response.json())
        .then(tokenData => {
            if (tokenData.token) {
                userToken = tokenData.token;
                console.log('Token dari API:', userToken);
            }
        })
        .catch(error => console.error('Gagal mengambil token:', error));
}

//get data 
// export function GetDataForm() {
//     const nomorid = document.querySelector("#nomorid").value;
//     const title = document.querySelector("#title").value;
//     const description = document.querySelector("#description").value;
//     const image = document.querySelector("#image").value;

//     const data = {
//         nomorid: nomorid,
//         title: title,
//         description: description,
//         image: image
//     };
//     return data
// }

// post ticket
export function PostTicket() {
    const nomorid = document.querySelector("#nomorid").value;
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const image = document.querySelector("#image").value;

    const data = {
        nomorid: nomorid,
        title: title,
        description: description,
        image: image
    };
    return data
}

// alert post 
export function AlertPost(value) {
    alert(value.message + "\nData Berhasil Di Input")
    window.location.href = "elements.html"
}

// response post ticket
function ResponseTicket(response) {
    if (response && response.token) {
        console.log('Token User:', response.token);
        setCookieWithExpireHour('Token Login Admin', response.token, 2);
        window.location.href = 'https://wegotour.my.id/dashboard/';
        alert("Selamat Ticket anda telah berhasil di input")
    } else {
        alert('Ticket  anda gagal di input. Silahkan coba lagi.');
    }
}


export function ResponseTicket(result) {
    AlertPost(result);
}

// export function ResponseLogin(result) {
//     ResponsePostLogin(result)
// }
