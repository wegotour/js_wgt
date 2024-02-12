const urlParams = new URLSearchParams(window.location.search);
const tiketId = urlParams.get("tiketId");

export const urlPUT = "https://asia-southeast2-wegotour-403712.cloudfunctions.net/updatedatatransaksi?_id=" + tiketId;

export const AmbilResponse = (result) => {
  if (result.status) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: "success",
      title: "Data berhasil diubah",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "datatiket.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: result.message,
    });
  }
};
