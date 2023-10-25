const requestURL = "https://tinoemaumbe.github.io/wdd230/directory/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //loop integraded in the promise
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const bness = jsonObject["data"];
    const cards = document.querySelector(".cards");
    bness.forEach((business) => {
      //Injects the rest of the code here itself.//
      let card = document.createElement("section");

      let logo = document.createElement("img");

      logo.setAttribute("src", business.imageurl);

      logo.setAttribute(
        "alt",
        `Logo of ${business.name}, located at ${business.address} and they can be reached at ${business.phone}`
      );


      let h2 = document.createElement("h2");
      h2.textContent = `${business.name} `;

      let p1 = document.createElement("p");
      p1.textContent = ` ${business.phone}`; 

      let p2 = document.createElement("p");
      p2.textContent = ` ${business.address}`;

      let p3 = document.createElement("p");
      p3.textContent = ` ${business.website}`;

      //logo.setAttribute("loading", "lazy");
      card.appendChild(logo);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      cards.appendChild(card);
      document.querySelector("div.cards").appendChild(card);
    });
  });

