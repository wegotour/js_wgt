const urlParams = new URLSearchParams(window.location.search);
const tiketId = urlParams.get("tiketId");

export const urlFetch =
  "https://asia-southeast2-wegotour-403712.cloudfunctions.net/getdatatransaksi?_id=" +
  tiketId;
//isi dengan url gcf get tiket by id