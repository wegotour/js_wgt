import { URLGetTicket, responseData } from "../js/getTiket.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { hide } from "https://jscroot.github.io/element/croot.js";

const CountTiket = (count) => {
  const resultCountElement = document.getElementById("TiketCount");
  resultCountElement.innerHTML = `
    <p class="text-sm text-gray-600">
      <span class="font-semibold text-gray-800">${count}</span> results
    </p>`;
};

const get = (target_url, responseFunction) => {
  document.getElementById("skeletonLoader").style.display = "grow";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", getCookie("Authorization"));
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonData = JSON.parse(result);
      responseFunction(jsonData);

      // Hitung jumlah data dan perbarui tampilan
      const count = jsonData.length;
      CountTiket(count);
    })
    .catch((error) => {
      console.log("error", error);
      // Hide the skeleton loader in case of an error
      hide("skeletonLoader");
    });
};

get(URLGetTicket, responseData);