/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

document.addEventListener("DOMContentLoaded", function () {
  const ENDPOINT = "https://api.github.com/users";
  const btn = document.getElementById("btn");
  const outputContainer = document.getElementById("output");
  const message = document.getElementById("message");

  btn.addEventListener("click", function () {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((users) => {
        message.style.display = "none";
        outputContainer.innerHTML = "";

        users.forEach((user) => {
          const userCard = document.createElement("div");
          userCard.className = "user-card";
          userCard.innerHTML = `
              <p>Login: ${user.login}</p>
              <img src="${user.avatar_url}" alt="${user.login}" width="100" height="100">
            `;
          outputContainer.appendChild(userCard);
        });
      })

      .catch((error) => console.error("Error fetching data:", error));
  });
});
