// 1 Arreglo con los ids de clientes ordenados por rut
function listClientsIdsSortByTaxNumber() {

  clients.sort(function (a, b) {
    if (a.taxNumber > b.taxNumber) {
      return 1;
    }
    if (a.taxNumber < b.taxNumber) {
      return -1;
    }

    return 0;
  });
  return clients.map((client) => client.id);

};