import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetTicket = "https://asia-southeast2-wegotour-403712.cloudfunctions.net/getdatatransaksi";

export const tableTicket = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NO#</span>
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMATICKET#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#HARGA#</span
  >
</div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#ALAMAT#</span
  >
</div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NOHP#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#QUANTITY#</span
  >
</div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#TOTAL#</span
  >
</div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#NAMAPEMBELI#</span
  >
</div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#EMAIL#</span
  >
</div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<a
      href="updatetiket?tiketId=#IDEDIT#"
      class="inline-flex items-center px-2 cursor-pointer text-sm text-green-600 decoration-2 hover:underline font-medium"
    >
      Edit
 </a>
  
    <button class="btn btn-outline-danger btn-sm" onclick="deleteTiket('#IDHAPUS#')">Delete</button>
  </td>
</td>
</tr>
`;

export function responseData(results) {
  console.log(results);
  results.forEach(isiRow);
  hide("skeletonLoader");
}
let staticNumber = 1;
export function isiRow(value) {
    const content = tableTicket
    .replace("#NO#", staticNumber++)
    .replace("#NAMATICKET#", value.namaticket)
    .replace("#HARGA#", value.harga)
    .replace("#ALAMAT#", value.alamat)
    .replace("#NOHP#", value.nohp)
    .replace("#QUANTITY#", value.quantity)
    .replace("#TOTAL#", value.total)
    .replace("#NAMAPEMBELI#", value.namapembeli)
    .replace("#EMAIL#", value.email)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id);
    addInner("tableTicket", content);
}
