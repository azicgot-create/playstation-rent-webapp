const tg = window.Telegram.WebApp;

tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {

    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name");
    const username = document.getElementById("username");
    const userid = document.getElementById("userid");

    if (avatar && user.photo_url) {
        avatar.src = user.photo_url;
    }

    if (name) {
        name.innerText =
            (user.first_name || "") +
            " " +
            (user.last_name || "");
    }

    if (username) {
        username.innerText =
            user.username
            ? "@" + user.username
            : "Без username";
    }

    if (userid) {
        userid.innerText =
            "ID: " + user.id;
    }
}

function showPage(pageId, button) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document
        .getElementById(pageId)
        .classList.add("active");

    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if(button){
        button.classList.add("active");
    }
}

function calculatePrice(){

    const hours =
        parseInt(
            document.getElementById("hours").value
        ) || 1;

    const delivery =
        document.getElementById("delivery").checked;

    let total = hours * 250;

    if(delivery){
        total += 50;
    }

    document.getElementById(
        "total-price"
    ).innerText =
        "Итого: " + total + " ₽";
}

function goToPayment(){

    alert(
        "Экран оплаты будет следующим этапом"
    );
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const buttons =
            document.querySelectorAll(".rent-btn");

        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showPage(
                        "booking-page"
                    );

                }
            );

        });

    }
);
