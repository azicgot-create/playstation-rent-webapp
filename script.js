const tg = window.Telegram.WebApp;

tg.expand();

// --------------------
// ПОЛЬЗОВАТЕЛЬ
// --------------------

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

// --------------------
// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
// --------------------

function showPage(pageId, button) {

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

// --------------------
// ВЫБОР ПРИСТАВКИ
// --------------------

let selectedConsole = "";

function openBooking(consoleName) {

    selectedConsole = consoleName;

    document.getElementById(
        "selected-console"
    ).innerText = consoleName;

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(
        "booking-page"
    ).classList.add("active");

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });
}

// --------------------
// РАСЧЁТ СТОИМОСТИ
// --------------------

function calculatePrice() {

    const hours =
        Number(
            document.getElementById("hours").value
        );

    const delivery =
        document.getElementById("delivery").checked;

    let total = hours * 250;

    if (delivery) {
        total += 50;
    }

    document.getElementById(
        "total-price"
    ).innerText = `Итого: ${total} ₽`;
}

// --------------------
// ОПЛАТА
// --------------------

function goToPayment() {

    const date =
        document.getElementById("rent-date").value;

    const time =
        document.getElementById("rent-time").value;

    const hours =
        document.getElementById("hours").value;

    if (!date || !time) {

        alert(
            "Выберите дату и время аренды"
        );

        return;
    }

    alert(
`Бронирование

Приставка:
${selectedConsole}

Дата:
${date}

Время:
${time}

Часов:
${hours}

Следующий этап:
Оплата`
    );
}
