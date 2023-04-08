import { pets } from "./pets_info.js";
let randomIndexArr = [];

while (randomIndexArr.length < 6) {
  let randomIndex = Math.floor(Math.random() * pets.length);
  if (!randomIndexArr.includes(randomIndex)) randomIndexArr.push(randomIndex);
}

let newPets = pets
  .slice(randomIndexArr[0])
  .concat(pets.slice(0, randomIndexArr[0]));
const pet_cards = document.querySelector(".pet_cards");
showCards();
function showCards() {
  pet_cards.innerHTML = "";
  newPets.forEach((pet_info) => {
    const pet_card = document.createElement("div");
    pet_card.className = "pet_card_item";
    pet_cards.appendChild(pet_card);

    const pet_img = document.createElement("img");
    pet_img.className = "pet_img";
    pet_img.src = pet_info.img;
    pet_card.appendChild(pet_img);

    const pet_name = document.createElement("h4");
    pet_name.textContent = pet_info.name;
    pet_card.appendChild(pet_name);

    const button = document.createElement("button");
    button.textContent = "Learn more";
    pet_card.appendChild(button);

    pet_card.addEventListener("click", () => {
      document.body.classList.add("lock");

      const pop_up = document.createElement("div");
      pop_up.className = "pop-up";
      document.body.appendChild(pop_up);

      const close_div = document.createElement("div");
      close_div.className = "close-btn";
      const close_btn = document.createElement("button");
      close_div.appendChild(close_btn);
      pop_up.appendChild(close_div);

      const popUpContent = document.createElement("div");
      popUpContent.className = "pop-up_content";
      pop_up.appendChild(popUpContent);

      const popUpImg = document.createElement("div");
      popUpImg.className = "pop-up_img";
      const ImgPopUpImg = document.createElement("img");
      ImgPopUpImg.src = pet_info.img;
      popUpImg.appendChild(ImgPopUpImg);
      popUpContent.appendChild(popUpImg);

      const popUpPetInfo = document.createElement("div");
      popUpPetInfo.className = "pop-up_pet_info";
      popUpContent.appendChild(popUpPetInfo);

      const pet_name = document.createElement("h3");
      pet_name.textContent = pet_info.name;
      popUpPetInfo.appendChild(pet_name);

      const pet_type = document.createElement("h4");
      pet_type.textContent = `${pet_info.type} - ${pet_info.breed}`;
      popUpPetInfo.appendChild(pet_type);

      const pet_descr = document.createElement("p");
      pet_descr.textContent = pet_info.description;
      popUpPetInfo.appendChild(pet_descr);

      const ul = document.createElement("ul");
      popUpPetInfo.appendChild(ul);

      const li1 = document.createElement("li");
      li1.className = "li_item";
      li1.innerHTML = `<strong>Age:</strong>&nbsp ${pet_info.age}`;
      ul.appendChild(li1);

      const li2 = document.createElement("li");
      li2.className = "li_item";
      li2.innerHTML = `<strong>Inoculations:</strong>&nbsp ${pet_info.inoculations}`;
      ul.appendChild(li2);

      const li3 = document.createElement("li");
      li3.className = "li_item";
      li3.innerHTML = `<strong>Diseases:</strong>&nbsp ${pet_info.diseases}`;
      ul.appendChild(li3);

      const li4 = document.createElement("li");
      li4.className = "li_item";
      li4.innerHTML = `<strong>Parasites:</strong>&nbsp ${pet_info.parasites}`;
      ul.appendChild(li4);
      popUpContent.addEventListener("mouseleave", () => {
        pop_up.style.cursor = "pointer";
        close_btn.classList.add("hover");
      });

      popUpContent.addEventListener("mouseenter", () => {
        pop_up.style.cursor = "default";
        close_btn.classList.remove("hover");
      });

      pop_up.addEventListener("click", () => {
        if (!popUpContent.contains(event.target)) {
          document.body.classList.remove("lock");
          pop_up.remove();
        }
      });
      document.addEventListener("mouseleave", () => {
        close_btn.classList.remove("hover");
      });

      document.addEventListener("mouseenter", () => {
        close_btn.classList.add("hover");
      });
    });
  });
}
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const btn = document.querySelector(".btn");
const allNextBtn = document.querySelector(".all_next-btn");
const allPrevBtn = document.querySelector(".all_prev-btn");

console.log(randomIndexArr);

let counter = 1;
nextBtn.classList.add("Active");
prevBtn.classList.add("unActive");
allNextBtn.classList.add("Active");
allPrevBtn.classList.add("unActive");

nextBtn.addEventListener("click", () => {
  allPrevBtn.classList.remove("unActive");
  allPrevBtn.classList.add("Active");
  counter++;
  if (counter > 6) {
    prevBtn.classList.remove("unActive");
    prevBtn.classList.add("Active");
    nextBtn.classList.remove("Active");
    nextBtn.classList.add("unActive");
    allNextBtn.classList.remove("Active");
    allNextBtn.classList.add("unActive");
    counter = 6;
  } else {
    prevBtn.classList.remove("hover");
    prevBtn.classList.remove("unActive");
    prevBtn.classList.add("Active");
    nextBtn.classList.remove("unActive");
    nextBtn.classList.add("Active");
    btn.textContent = counter;
    console.log(randomIndexArr[counter - 1]);
    newPets = pets
      .slice(randomIndexArr[counter - 1])
      .concat(pets.slice(0, randomIndexArr[counter - 1]));

    showCards();
  }
});

prevBtn.addEventListener("click", () => {
  allNextBtn.classList.remove("unActive");
  allNextBtn.classList.add("Active");

  counter--;

  if (counter < 1) {
    nextBtn.classList.remove("unActive");
    nextBtn.classList.add("Active");
    prevBtn.classList.remove("Active");
    prevBtn.classList.add("unActive");
    allPrevBtn.classList.remove("Active");
    allPrevBtn.classList.add("unActive");
    counter = 1;
  } else {
    nextBtn.classList.remove("hover");
    nextBtn.classList.remove("unActive");
    nextBtn.classList.add("Active");
    prevBtn.classList.remove("unActive");
    prevBtn.classList.add("Active");
    btn.textContent = counter;

    console.log(randomIndexArr[counter - 1]);

    newPets = pets
      .slice(randomIndexArr[counter - 1])
      .concat(pets.slice(0, randomIndexArr[counter - 1]));
    showCards();
  }
});

allNextBtn.addEventListener("click", () => {
  counter = 6;
  btn.textContent = counter;

  allNextBtn.classList.remove("Active");
  allNextBtn.classList.add("unActive");
  allNextBtn.classList.remove("hover");

  allPrevBtn.classList.remove("unActive");
  allPrevBtn.classList.add("Active");

  nextBtn.classList.remove("Active");
  nextBtn.classList.add("unActive");
  prevBtn.classList.remove("hover");

  prevBtn.classList.remove("unActive");
  prevBtn.classList.add("Active");

  newPets = pets
    .slice(randomIndexArr[counter - 1])
    .concat(pets.slice(0, randomIndexArr[counter - 1]));
  showCards();
});

allPrevBtn.addEventListener("click", () => {
  counter = 1;
  btn.textContent = counter;

  allPrevBtn.classList.remove("Active");
  allPrevBtn.classList.add("unActive");
  allPrevBtn.classList.remove("hover");

  allNextBtn.classList.remove("unActive");
  allNextBtn.classList.add("Active");

  prevBtn.classList.remove("Active");
  prevBtn.classList.add("unActive");
  nextBtn.classList.remove("hover");

  nextBtn.classList.remove("unActive");
  nextBtn.classList.add("Active");

  newPets = pets
    .slice(randomIndexArr[counter - 1])
    .concat(pets.slice(0, randomIndexArr[counter - 1]));
  showCards();
});

prevBtn.addEventListener("mouseenter", () => {
  if (prevBtn.classList.contains("Active")) {
    prevBtn.classList.add("hover");
  }
});

prevBtn.addEventListener("mouseleave", () => {
  if (prevBtn.classList.contains("Active")) {
    prevBtn.classList.remove("hover");
  }
});

nextBtn.addEventListener("mouseenter", () => {
  if (nextBtn.classList.contains("Active")) {
    nextBtn.classList.add("hover");
  }
});

nextBtn.addEventListener("mouseleave", () => {
  if (nextBtn.classList.contains("Active")) {
    nextBtn.classList.remove("hover");
  }
});
allPrevBtn.addEventListener("mouseenter", () => {
  if (allPrevBtn.classList.contains("Active")) {
    allPrevBtn.classList.add("hover");
  }
});

allPrevBtn.addEventListener("mouseleave", () => {
  if (allPrevBtn.classList.contains("Active")) {
    allPrevBtn.classList.remove("hover");
  }
});

allNextBtn.addEventListener("mouseenter", () => {
  if (allNextBtn.classList.contains("Active")) {
    allNextBtn.classList.add("hover");
  }
});

allNextBtn.addEventListener("mouseleave", () => {
  if (allNextBtn.classList.contains("Active")) {
    allNextBtn.classList.remove("hover");
  }
});
