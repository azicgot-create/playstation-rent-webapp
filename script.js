const tg = window.Telegram.WebApp;
tg.expand();

function show(page){

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");

    document.querySelectorAll(".nav button").forEach(b => {
        b.classList.remove("active");
    });

    document.querySelector(`[data-page="${page}"]`).classList.add("active");
}

document.querySelectorAll(".nav button").forEach(btn => {
    btn.addEventListener("click", () => {
        show(btn.dataset.page);
    });
});

// Telegram user
if(tg.initDataUnsafe.user){

    document.getElementById("name").innerText =
        tg.initDataUnsafe.user.first_name;

    document.getElementById("id").innerText =
        "ID: " + tg.initDataUnsafe.user.id;
}

show("home");
