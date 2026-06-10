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

    button.classList.add("active");
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

                    showBookingPage();

                }
            );

        });

    }
);

function showBookingPage() {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document
        .getElementById("booking-page")
        .classList.add("active");

    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

}
