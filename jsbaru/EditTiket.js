export const isiData = (results) => {
    const inputMapping = [
      { id: "namaticket", path: "tiket.namaticket" },
      { id: "harga", path: "tiket.harga" },
      { id: "alamat", path: "tiket.alamat" },
      { id: "nohp", path: "tiket.nohp" },
      { id: "quantity", path: "tiket.quantity" },
      { id: "total", path: "tiket.total" },
      { id: "namapembeli", path: "tiket.namapembeli" },
      { id: "email", path: "tiket.email" },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  };
  
  const getNestedValue = (obj, path, index, property) => {
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
  };
  