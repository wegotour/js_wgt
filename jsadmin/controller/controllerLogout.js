import {
    deleteCookie
} from 'https://jscroot.github.io/cookie/croot.js';


function logout() {

    alert("Apakah anda yakin ingin keluar?");

    deleteCookie('user_token');
    window.location.href = 'https://wegotour.my.id';
}


document.getElementById('logoutButton').addEventListener('click', logout);