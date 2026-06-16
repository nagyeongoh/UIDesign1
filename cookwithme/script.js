const stage = document.getElementById("stage");
const dialog = document.getElementById("dialog");

const FOODS = [
  {
    category: "seasoning",
    name: "soy sauce",
    image: "images/foods/soy-sauce.png",
    dueDays: 500,
    lines: ["Smells savory.", "A little goes a long way."]
  },
  {
    category: "seasoning",
    name: "doenjang",
    image: "images/foods/doenjang.png",
    dueDays: 400,
    lines: ["It smells rich.", "Perfect for a warm stew."]
  },
  {
    category: "seasoning",
    name: "gochujang",
    image: "images/foods/gochujang.png",
    dueDays: 400,
    lines: ["Feeling spicy today?", "That color looks intense."]
  },
  {
    category: "seasoning",
    name: "sesame oil",
    image: "images/foods/sesame-oil.png",
    dueDays: 180,
    lines: ["Such a nutty aroma.", "A finishing touch makes all the difference."]
  },
  {
    category: "seasoning",
    name: "perilla oil",
    image: "images/foods/perilla-oil.png",
    dueDays: 140,
    lines: ["Something smells delicious.", "Makes me think of noodles."]
  },
  {
    category: "seasoning",
    name: "cooking oil",
    image: "images/foods/cooking-oil.png",
    dueDays: 365,
    lines: ["Ready for frying.", "Looks like there's still plenty left."]
  },

  {
    category: "fruit",
    name: "apple",
    image: "images/foods/apple.png",
    dueDays: 49,
    lines: ["Still looks fresh.", "Crisp and sweet."]
  },
  {
    category: "fruit",
    name: "pear",
    image: "images/foods/pear.png",
    dueDays: 21,
    lines: ["Best served cold.", "Juicy and refreshing."]
  },
  {
    category: "fruit",
    name: "tangerine",
    image: "images/foods/tangerine.png",
    dueDays: 21,
    lines: ["Smells like winter.", "I could eat a few of these."]
  },
  {
    category: "fruit",
    name: "strawberry",
    image: "images/foods/strawberry.png",
    dueDays: 5,
    lines: ["Looks delicious.", "Hope it's still fresh."]
  },
  {
    category: "fruit",
    name: "grape",
    image: "images/foods/grape.png",
    dueDays: 14,
    lines: ["Tiny little jewels.", "They look sweet."]
  },

  {
    category: "dairy",
    name: "egg",
    image: "images/foods/egg.png",
    dueDays: 28,
    lines: ["A kitchen essential.", "Hope none are cracked."]
  },
  {
    category: "dairy",
    name: "milk",
    image: "images/foods/milk.png",
    dueDays: 7,
    lines: ["A glass would be nice.", "Looks fresh enough."]
  },
  {
    category: "dairy",
    name: "cheese",
    image: "images/foods/cheese.png",
    dueDays: 28,
    lines: ["Cheese makes everything better.", "Hope it's sealed well."]
  },
  {
    category: "dairy",
    name: "butter",
    image: "images/foods/butter.png",
    dueDays: 90,
    lines: ["Cooking with butter is always tempting.", "Looks smooth and rich."]
  },
  {
    category: "dairy",
    name: "yogurt",
    image: "images/foods/yogurt.png",
    dueDays: 14,
    lines: ["Packed with probiotics.", "A nice healthy snack."]
  },

  {
    category: "vegetable",
    name: "peeled garlic",
    image: "images/foods/peeled-garlic.png",
    dueDays: 60,
    lines: ["That garlic smell is strong.", "A little garlic changes everything."]
  },
  {
    category: "vegetable",
    name: "green onion",
    image: "images/foods/green-onion.png",
    dueDays: 14,
    lines: ["Adds flavor to almost anything.", "Looks ready to be chopped."]
  },
  {
    category: "vegetable",
    name: "carrot",
    image: "images/foods/carrot.png",
    dueDays: 28,
    lines: ["Still looks crunchy.", "Bright and colorful."]
  },
  {
    category: "vegetable",
    name: "napa cabbage",
    image: "images/foods/napa-cabbage.png",
    dueDays: 60,
    lines: ["Perfect for kimchi.", "That's a big leafy vegetable."]
  },
  {
    category: "vegetable",
    name: "radish",
    image: "images/foods/radish.png",
    dueDays: 28,
    lines: ["Feels heavy with water.", "A classic ingredient."]
  },
  {
    category: "vegetable",
    name: "cucumber",
    image: "images/foods/cucumber.png",
    dueDays: 7,
    lines: ["Looks refreshing.", "Perfect for a hot day."]
  },
  {
    category: "vegetable",
    name: "zucchini",
    image: "images/foods/zucchini.png",
    dueDays: 7,
    lines: ["A versatile vegetable.", "Looks fresh and tender."]
  },
  {
    category: "vegetable",
    name: "mushroom",
    image: "images/foods/mushroom.png",
    dueDays: 7,
    lines: ["Mushrooms have a unique aroma.", "They belong in a paper bag."]
  },
  {
    category: "vegetable",
    name: "bean sprouts",
    image: "images/foods/bean-sprouts.png",
    dueDays: 5,
    lines: ["Looks crisp.", "Maybe it's time for soup."]
  },

  {
    category: "beans and grains",
    name: "rice",
    image: "images/foods/rice.png",
    dueDays: 365,
    lines: ["A staple food.", "Hope the container is sealed tight."]
  },
  {
    category: "beans and grains",
    name: "brown rice",
    image: "images/foods/brown-rice.png",
    dueDays: 180,
    lines: ["Nutritious and filling.", "Great mixed with white rice."]
  },
  {
    category: "beans and grains",
    name: "flour",
    image: "images/foods/flour.png",
    dueDays: 365,
    lines: ["Keep it dry.", "Perfect for baking."]
  },
  {
    category: "beans and grains",
    name: "tofu",
    image: "images/foods/tofu.png",
    dueDays: 5,
    lines: ["Soft and delicate.", "It belongs in water."]
  },
  {
    category: "beans and grains",
    name: "soft tofu",
    image: "images/foods/soft-tofu.png",
    dueDays: 3,
    lines: ["Extremely soft.", "Better eat it soon."]
  },
  {
    category: "beans and grains",
    name: "fried tofu",
    image: "images/foods/fried-tofu.png",
    dueDays: 7,
    lines: ["Looks ready for a picnic.", "Why save it for later?"]
  },
  {
    category: "beans and grains",
    name: "doenjang stew base",
    image: "images/foods/doenjang-stew-base.png",
    dueDays: 14,
    lines: ["Feels comforting.", "Too much aging isn't always good."]
  },

  {
    category: "seafood",
    name: "fish",
    image: "images/foods/fish.png",
    dueDays: 2,
    lines: ["Better freeze it soon.", "Grilled fish sounds nice."]
  },
  {
    category: "seafood",
    name: "clam",
    image: "images/foods/clam.png",
    dueDays: 2,
    lines: ["Smells like the sea.", "Should be cooked soon."]
  },
  {
    category: "seafood",
    name: "oyster",
    image: "images/foods/oyster.png",
    dueDays: 2,
    lines: ["A winter favorite.", "Don't keep it too long."]
  },

  {
    category: "meat",
    name: "pork",
    image: "images/foods/pork.png",
    dueDays: 3,
    lines: ["Maybe freeze it for later.", "Pork stir-fry sounds good."]
  },
  {
    category: "meat",
    name: "beef",
    image: "images/foods/beef.png",
    dueDays: 5,
    lines: ["Looks premium.", "Maybe it's time for bulgogi."]
  },
  {
    category: "meat",
    name: "chicken",
    image: "images/foods/chicken.png",
    dueDays: 2,
    lines: ["Better cook it soon.", "Chicken soup sounds comforting."]
  },
  {
    category: "meat",
    name: "duck",
    image: "images/foods/duck.png",
    dueDays: 2,
    lines: ["Duck pairs well with vegetables.", "Don't let it sit too long."]
  }
];

let currentFoodPage = 0;
let selectedFood = FOODS[0].name;
const FOODS_PER_PAGE = 10;

let objects = [];
const characters = [];
const CHARACTER_IMAGES = [
  "images/characters/char1.gif",
  "images/characters/char2.gif",
  "images/characters/char3.gif"
];

const modal = document.getElementById("object-modal");
const placeGuide = document.getElementById("place-guide");

let pendingObjectData = null;
let isPlacingObject = false;

/* -------------------- */
/* 날짜 관련 */
/* -------------------- */


function addDaysToDateValue(dateValue, days) {
  const date = new Date(dateValue);
  date.setDate(date.getDate() + days);

  return date.toISOString().split("T")[0];
}

function getSelectedFoodData() {
  return FOODS.find(food => food.name === selectedFood);
}

function updateDueDateByFood() {
  const createdAt = document.getElementById("modal-date").value;
  const food = getSelectedFoodData();

  if (!createdAt || !food) return;

  document.getElementById("modal-due-date").value =
    addDaysToDateValue(createdAt, food.dueDays);
}


function getTodayValue() {
  const today = new Date();

  return today.toISOString().split("T")[0];
}

function getDateValueAfter(days) {
  const date = new Date();

  date.setDate(date.getDate() + days);

  return date.toISOString().split("T")[0];
}

function getRelativeDateText(createdAt) {
  const created = new Date(createdAt);
  const today = new Date();

  created.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffDays =
    Math.floor(
      (today - created)
      /
      (1000 * 60 * 60 * 24)
    );

  if (diffDays <= 0) {
    return "오늘";
  }

  return `${diffDays}일 전`;
}



function getDueStatus(obj) {

  const dueDate = obj.dataset.dueDate;

  if (!dueDate) {
    return "normal";
  }

  const today = new Date();
  const due = new Date(dueDate);

  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  const diffDays =
    Math.floor(
      (due - today) /
      (1000 * 60 * 60 * 24)
    );

  // 이미 지남
  if (diffDays < 0) {
    return "expired";
  }

  // 3일 전 ~ 당일
  if (diffDays <= 3) {
    return "old";
  }

  return "normal";
}

function getObjectLine(obj) {
  const status = getDueStatus(obj);

  if (status === "old") {
    return "It's almost time to let this go.";
  }

  if (status === "expired") {
    return "Something smells a little strange...";
  }

  const foodName = obj.dataset.name;
  const food = FOODS.find(item => item.name === foodName);

  const lines = food?.lines || [
    "I've never seen this before."
  ];

  return lines[Math.floor(Math.random() * lines.length)];
}


function createObjectAt(x, y, data) {
  const food = FOODS.find(item => item.name === data.icon);

  const obj = document.createElement("div");
  obj.className = "object";

  obj.dataset.id = data.id || crypto.randomUUID();
  obj.dataset.name = data.icon;
  obj.dataset.createdAt = data.createdAt;
  obj.dataset.dueDate = data.dueDate;

  obj.style.left = x - 50 + "px";
  obj.style.top = y - 50 + "px";

  obj.innerHTML = `
    <img
      class="object-image"
      src="${food.image}"
      alt="${food.name}"
    >

    <div class="object-info">
      ${getRelativeDateText(data.createdAt)}
    </div>
  `;

  stage.appendChild(obj);
  makeObjectDraggable(obj);
  objects.push(obj);
  saveObjects();
}


function makeObjectDraggable(obj) {
  let pressTimer = null;
  let isDragging = false;

  obj.addEventListener("mousedown", (event) => {
    event.stopPropagation();

    pressTimer = setTimeout(() => {
      isDragging = true;
      obj.classList.add("dragging");
    }, 500);
  });

  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    obj.style.left = event.clientX - obj.offsetWidth / 2 + "px";
    obj.style.top = event.clientY - obj.offsetHeight / 2 + "px";
  });

  document.addEventListener("mouseup", () => {
    clearTimeout(pressTimer);

    if (isDragging) {
      isDragging = false;
      obj.classList.remove("dragging");
      saveObjects();
    }
  });

  obj.addEventListener("dblclick", (event) => {
  event.stopPropagation();

  const ok = confirm("이 물체를 삭제할까요?");

  if (!ok) return;

  objects = objects.filter(item => item !== obj);
  obj.remove();
  saveObjects();
  });
}

function saveObjects() {
  const savedObjects = objects.map(obj => ({
    id: obj.dataset.id,
    icon: obj.dataset.name,
    createdAt: obj.dataset.createdAt,
    dueDate: obj.dataset.dueDate,
    x: parseFloat(obj.style.left),
    y: parseFloat(obj.style.top)
  }));

  localStorage.setItem(
    "myObjects",
    JSON.stringify(savedObjects)
  );
}

function loadObjects() {
  const saved = localStorage.getItem("myObjects");

  if (!saved) return;

  const savedObjects = JSON.parse(saved);

  savedObjects.forEach(data => {
    createObjectAt(data.x + 50, data.y + 50, data);
  });
}

/* -------------------- */
/* 캐릭터 */
/* -------------------- */

function createCharacter(x, floorY, imageIndex) {
  const el = document.createElement("div");
  el.className = "character";

  const image = CHARACTER_IMAGES[imageIndex];

  const vx =
    (Math.random() * 1 + 1) *
    (Math.random() > 0.5 ? 1 : -1);

  el.style.backgroundImage = `url("${image}")`;

  if (vx < 0) {
    el.classList.add("facing-left");
  }

  stage.appendChild(el);

  const character = {
    el,
    x,
    y: floorY,
    vx,
    image,
    stoppedUntil: 0,
    lastObject: null
  };

  characters.push(character);
}

// 1층
createCharacter(50, 68, 0);
createCharacter(250, 68, 1);
createCharacter(450, 68, 2);



// 2층
createCharacter(100, 250, 1);
createCharacter(300, 250, 0);

createCharacter(700, 250, 2);


// 3층
createCharacter(50, 450, 2);

createCharacter(450, 450, 0);
createCharacter(650, 450, 1);


/* -------------------- */
/* 시작 문 */
/* -------------------- */

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {
      document
        .getElementById("intro-door")
        .classList.add("open");
    }, 300);

    setTimeout(() => {
      document
        .getElementById("intro-door")
        .remove();
    }, 3000);
  }
);

/* -------------------- */
/* 모달 */
/* -------------------- */

function renderFoodGrid() {
  const foodGrid = document.getElementById("food-grid");
  foodGrid.innerHTML = "";

  const start = currentFoodPage * FOODS_PER_PAGE;
  const pageFoods = FOODS.slice(start, start + FOODS_PER_PAGE);

  pageFoods.forEach(food => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${food.image}" alt="${food.name}">
      <span>${food.name}</span>
    `;

    if (food.name === selectedFood) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      selectedFood = food.name;
      renderFoodGrid();
      updateDueDateByFood();
    });

    foodGrid.appendChild(card);
  });
}

document.getElementById("next-food").addEventListener("click", (event) => {
  event.stopPropagation();

  const maxPage =
    Math.ceil(FOODS.length / FOODS_PER_PAGE) - 1;

  if (currentFoodPage < maxPage) {
    currentFoodPage++;
    renderFoodGrid();
  }
});

document.getElementById("prev-food").addEventListener("click", (event) => {
  event.stopPropagation();

  if (currentFoodPage > 0) {
    currentFoodPage--;
    renderFoodGrid();
  }
});

document
  .getElementById("open-modal")
  .addEventListener("click", () => {
    document.getElementById("modal-date").value = getTodayValue();

    currentFoodPage = 0;
    selectedFood = FOODS[0].name;

    renderFoodGrid();
    updateDueDateByFood();

    modal.classList.add("show");
  });

document
  .getElementById("modal-date")
  .addEventListener("change", () => {
    updateDueDateByFood();
  });

document
  .getElementById("cancel-modal")
  .addEventListener(
    "click",
    () => {
      modal.classList.remove("show");
    }
  );

document
  .getElementById("choose-place")
  .addEventListener(
    "click",
    (event) => {
      event.stopPropagation();

      pendingObjectData = {

        icon: selectedFood,

        createdAt:
          document.getElementById("modal-date").value,

        dueDate:
          document.getElementById("modal-due-date").value,

      };

      modal.classList.remove("show");

      isPlacingObject = true;

      placeGuide.classList.add("show");

      createPreviewObject(pendingObjectData.icon);
    }
  );

/* -------------------- */
/* 위치 선택 */
/* -------------------- */

stage.addEventListener("click", (event) => {
  if (!isPlacingObject || !pendingObjectData) {
    return;
  }

  createObjectAt(
    event.clientX,
    event.clientY,
    pendingObjectData
  );

  pendingObjectData = null;
  isPlacingObject = false;

  placeGuide.classList.remove("show");
  removePreviewObject();
});

/*--미리보기--*/

let previewObject = null;

function createPreviewObject(foodName) {
  removePreviewObject();

  const food = FOODS.find(item => item.name === foodName);

  previewObject = document.createElement("div");
  previewObject.className = "preview-object";

  previewObject.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
  `;

  document.body.appendChild(previewObject);
}

function removePreviewObject() {
  if (previewObject) {
    previewObject.remove();
    previewObject = null;
  }
}

document.addEventListener("mousemove", (event) => {
  if (!isPlacingObject || !previewObject) return;

  previewObject.style.left = event.clientX - 50 + "px";
  previewObject.style.top = event.clientY - 50 + "px";
});



/* -------------------- */
/* 충돌 */
/* -------------------- */

function rectsOverlap(a, b) {

  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
}

/* -------------------- */
/* 애니메이션 */
/* -------------------- */

function animate() {

  const now = Date.now();

  characters.forEach(char => {

    if (
      now >
      char.stoppedUntil
    ) {

      char.x += char.vx;

      if (
            char.x < 0 ||
            char.x > window.innerWidth - 36
          ) {
            char.vx *= -1;

              if (char.vx > 0) {
                char.el.classList.remove("facing-left");
              } else {
                char.el.classList.add("facing-left");
                }
            }

      char.el.style.left =
        char.x + "px";

      char.el.style.top =
        char.y + "px";
    }

    const charRect =
      char.el.getBoundingClientRect();

    objects.forEach(obj => {

      const objRect =
        obj.getBoundingClientRect();

      if (
        rectsOverlap(
          charRect,
          objRect
        ) &&
        now >
        char.stoppedUntil &&
        char.lastObject !== obj
      ) {

        char.stoppedUntil =
          now + 2000;

        char.lastObject =
          obj;

        const status =
          getDueStatus(obj);

          dialog.classList.remove(
            "old",
            "expired"
          );

          if (status === "old") {
            dialog.classList.add("old");
          }

          if (status === "expired") {
            dialog.classList.add("expired");
          }

          dialog.textContent =
            getObjectLine(obj);

        dialog.style.left =
          objRect.left + "px";

        dialog.style.top =
          objRect.top - 45 + "px";

        dialog.style.display =
          "block";

        clearTimeout(
          dialog.hideTimer
        );

        dialog.hideTimer =
          setTimeout(() => {

            dialog.style.display =
              "none";

          }, 5000);
      }

      if (
        !rectsOverlap(
          charRect,
          objRect
        ) &&
        char.lastObject === obj
      ) {
        char.lastObject = null;
      }
    });
  });

  requestAnimationFrame(
    animate
  );
}


loadObjects();
animate();