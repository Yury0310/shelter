console.log(`Итого: 94`);

import { pets } from "./pets_info.js";

let randomIndex = Math.floor(Math.random() * pets.length);
let newPets = pets.slice(randomIndex).concat(pets.slice(0, randomIndex));
const pet_cards = document.querySelector(".pet_cards");

function showCards() {
  pet_cards.innerHTML = "";

  const slider = document.createElement("div");
  slider.className = "slider";
  pet_cards.appendChild(slider);

  const prevBtn = document.createElement("button");
  prevBtn.className = "prev-btn";
  slider.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.className = "next-btn";
  slider.appendChild(nextBtn);
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
      document.body.classList.add("lock1");

      const pop_up = document.createElement("div");
      pop_up.className = "pop-up";
      document.body.appendChild(pop_up);

      const popUpContent = document.createElement("div");
      popUpContent.className = "pop-up_content";
      pop_up.appendChild(popUpContent);

      const close_div = document.createElement("div");
      close_div.className = "close-btn";
      const close_btn = document.createElement("button");
      close_div.appendChild(close_btn);
      popUpContent.appendChild(close_div);

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
        if (
          !popUpContent.contains(event.target) ||
          close_btn.contains(event.target)
        ) {
          document.body.classList.remove("lock1");
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

  prevBtn.addEventListener("click", () => {
    randomIndex -= 3;
    if (randomIndex == -1) {
      randomIndex = 8;
    }
    if (randomIndex == -2) {
      randomIndex = 7;
    }
    if (randomIndex == -3) {
      randomIndex = 6;
    }
    newPets = pets.slice(randomIndex).concat(pets.slice(0, randomIndex));
    showCards();
  });

  nextBtn.addEventListener("click", () => {
    randomIndex += 3;
    if (randomIndex == 8) {
      randomIndex = 0;
    }
    if (randomIndex == 9) {
      randomIndex = 1;
    }
    if (randomIndex == 10) {
      randomIndex = 2;
    }
    newPets = pets.slice(randomIndex).concat(pets.slice(0, randomIndex));

    showCards();
  });
}
showCards();

console.log(`
SHELTER-PART1\n
Страница Main (60):
1. Проверка верстки +7
2. Вёрстка соответствует макету +35
3. Требования к css +6
4. Интерактивность элементов +12
Страница Pets (40)
5. Проверка верстки +7
6. Вёрстка соответствует макету +15
7. Требования к css +4
8. Интерактивность элементов +14
Итого: 100\n
SHELTER-PART2\n
1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px +14
2.Вёрстка страницы Main соответствует макету при ширине экрана 768px +14
3.Вёрстка страницы Main соответствует макету при ширине экрана 320px +14
4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px +14
5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px +14
6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px +14
7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +20
8.Верстка резиновая: при плавном изменении размера экрана элементы верстки так же плавно меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции +8
9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню +4
10.Верстка обеих страниц валидная +8
Итого: 100\n
`);
