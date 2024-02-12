import { getValue } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { urlPUT, AmbilResponse } from "./urlPutTiket.js";

console.log("hadeer");

const putData = (target_url, datajson, responseFunction) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));

  const raw = JSON.stringify(datajson);

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => responseFunction(result))
    .catch((error) => console.log("error", error));
};

const pushData = () => {
  const namaticket = getValue("namaticket"); 
  const harga = getValue("harga");
  const namapembeli = getValue("namapembeli");
  const email = getValue("email");
  const alamat = getValue("alamat");
  const nohp = getValue("nohp");
  const quantity = getValue("quantity");
  const total = getValue("total");

  // Create the updated data object
  const data = {
     
      namaticket: namaticket,
      harga: harga,
      namapembeli: namapembeli,
      email: email,
      alamat: alamat,
      nohp: nohp,
      quantity: quantity,
      total: total,
  };

  putData(urlPUT, data, AmbilResponse);
};

const updateButton = document.getElementById("updateButton");

updateButton.addEventListener("click", () => {
  console.log("button aktif");
  pushData(); // Call pushData function when the button is clicked
});