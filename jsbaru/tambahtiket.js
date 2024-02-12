import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const postTambahTiket = () => {
  const target_url = "https://asia-southeast2-wegotour-403712.cloudfunctions.net/insertdatatransaksi";
  const tokenvalue = getCookie("Authorization");
  const tokenkey = "Authorization";
  const datainjson = {
    namaticket: getValue("namaticket"),
    harga: getValue("harga"),
    namapembeli: getValue("namapembeli"),
    email: getValue("email"),
    alamat: getValue("alamat"),
    nohp: getValue("nohp"),
    quantity: getValue("quantity"),
    total: getValue("total"),
  };
  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
  console.log(datainjson);
};

const responseData = (result) => {
  if (result.status) {
    Swal.fire({
      icon: "success",
      title: "Insert Successful",
      text: result.message,
    }).then(() => {
      // Redirect to the success URL
      window.location.href = "datatiket.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Insert Failed",
      text: result.message,
    }).then(() => {
      // Reload the page on failure
      window.location.reload();
    });
  }
};

window.postTambahTiket = postTambahTiket;
