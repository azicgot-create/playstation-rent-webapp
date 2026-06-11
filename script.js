const tg = window.Telegram.WebApp;

tg.expand();

// ----------------------------
// ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
// ----------------------------

const user = tg.initDataUnsafe.user;

if (user) {

    document.getElementById("avatar").src =
        user.photo_url || "https://placehold.co/150";

    document.getElementById("name").innerText =
        `${user.first_name || ""} ${user.last_name || ""}`;

    document.getElementById("username").innerText =
        user.username
            ? "@" + user.username
            : "Username отсутствует";

    document.getElementById("userid").innerText =
        "ID: " + user.id;
}

// ----------------------------
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ----------------------------

let selectedConsole = "";
let selectedGames = [];
let totalPrice = 0;

// ----------------------------
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// ----------------------------

function showPage(pageId, button = null) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}

// ----------------------------
// ВЫБОР ПРИСТАВКИ
// ----------------------------

function openBooking(consoleName) {

    selectedConsole = consoleName;

    document.getElementById(
        "selected-console"
    ).innerText = consoleName;

    showPage("booking-page");
}

// ----------------------------
// ПОИСК ИГР
// ----------------------------

function searchGames() {

    const value =
        document.getElementById("search")
        .value
        .toLowerCase();

    const games =
        document.querySelectorAll(".game-card");

    games.forEach(game => {

        if (
            game.innerText
            .toLowerCase()
            .includes(value)
        ) {

            game.style.display = "block";

        } else {

            game.style.display = "none";

        }

    });
}

// ----------------------------
// ПЕРЕХОД К ИГРАМ
// ----------------------------

function openGamesSelection() {

    const date =
        document.getElementById("rent-date").value;

    const time =
        document.getElementById("rent-time").value;

    const hours =
        document.getElementById("hours").value;

    if (!date || !time || !hours) {

        alert(
            "Заполните дату, время и количество часов"
        );

        return;
    }

    showPage("games-select-page");
}

// ----------------------------
// СОЗДАНИЕ ЗАКАЗА
// ----------------------------

function createOrder() {

    selectedGames = [];

    document
        .querySelectorAll(
            "#games-select-page input[type='checkbox']:checked"
        )
        .forEach(game => {

            selectedGames.push(
                game.value
            );

        });

    if (selectedGames.length === 0) {

        alert(
            "Выберите хотя бы одну игру"
        );

        return;
    }

    const date =
        document.getElementById("rent-date").value;

    const time =
        document.getElementById("rent-time").value;

    const hours =
        Number(
            document.getElementById("hours").value
        );

    const delivery =
        document.getElementById("delivery").checked;

    totalPrice = hours * 250;

    if (delivery) {
        totalPrice += 50;
    }

    let gamesHtml = "";

    selectedGames.forEach(game => {

        gamesHtml += `
            <li>${game}</li>
        `;

    });

    document.getElementById(
        "order-info"
    ).innerHTML = `

        <h2>${selectedConsole}</h2>

        <p>📅 ${date}</p>

        <p>🕒 ${time}</p>

        <p>⏰ ${hours} ч.</p>

        <p>
            🚗 ${
                delivery
                ? "Да"
                : "Нет"
            }
        </p>

        <hr>

        <h3>Выбранные игры</h3>

        <ul>
            ${gamesHtml}
        </ul>

        <hr>

        <h2>
            💰 Итого:
            ${totalPrice} ₽
        </h2>

    `;

    showPage("confirm-page");
}

// ----------------------------
// ОПЛАТА
// ----------------------------

function goToPayment() {

    alert(

`Заказ сформирован

Приставка:
${selectedConsole}

Игр:
${selectedGames.length}

Стоимость:
${totalPrice} ₽

Следующий этап:
Подключение оплаты СБП
и загрузки чека.`

    );
}
