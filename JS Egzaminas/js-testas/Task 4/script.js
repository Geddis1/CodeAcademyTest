/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const outputDiv = document.getElementById("output");

  fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const brandHeading = document.createElement("h2");
        brandHeading.textContent = car.brand;
        card.appendChild(brandHeading);

        const modelsList = document.createElement("ul");
        car.models.forEach((model) => {
          const listItem = document.createElement("li");
          listItem.textContent = model;
          modelsList.appendChild(listItem);
        });

        modelsList.style.display = "none";
        card.appendChild(modelsList);

        card.addEventListener("click", function () {
          modelsList.style.display =
            modelsList.style.display === "none" ? "block" : "none";
        });

        outputDiv.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
