const tg = window.Telegram.WebApp;

tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {

    const profilePage = document.getElementById("profile-page");

    profilePage.innerHTML = `

        <h1>Профиль</h1>

        <div class="profile-card">

            <img
                src="${user.photo_url || 'https://placehold.co/150'}"
                class="avatar"
            >

            <h2>${user.first_name || ''} ${user.last_name || ''}</h2>

            <p>@${user.username || 'нет username'}</p>

            <p>ID: ${user.id}</p>

        </div>

        <div class="card">
            История бронирований появится позже
        </div>

    `;
}

function showPage(pageId, button) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}
