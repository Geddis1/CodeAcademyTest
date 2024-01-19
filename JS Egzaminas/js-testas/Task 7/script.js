/* ------------------------------ TASK 7 -----------------------------------
Turimas "items" masyvas.

Parašykite funkciją "transformItems", kuri pakeis kiekvieno objekto struktūrą.
Funkcija turėtų grąžinti naują masyvą, kuriame kiekvienas objektas turės tik "id" ir "fullName" savybes.

Pvz., { id: '1', name: 'John', surname: 'Doe' } tampa { id: '1', fullName: 'John Doe' }.
-------------------------------------------------------------------------- */

// const items = [
//   { id: '1', name: 'John', surname: 'Doe' },
//   { id: '2', name: 'Jane', surname: 'Doe' },
//   { id: '3', name: 'James', surname: 'Smith' },
// ];

function transformItems(items) {
  return items.map((item) => ({
    id: item.id,
    fullName: `${item.name} ${item.surname}`,
  }));
}

const items = [
  { id: "1", name: "John", surname: "Doe" },
  { id: "2", name: "Jane", surname: "Doe" },
  { id: "3", name: "James", surname: "Smith" },
];

console.log(transformItems(items));
