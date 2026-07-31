// ==========================================
// PromptNest v7
// Stable Version
// Auto Generate + Search + Filter + Copy Prompt
// ==========================================

// ---------- Generate AI Tool Cards ----------

const toolsContainer = document.getElementById("toolsContainer");

if (toolsContainer && typeof tools !== "undefined") {

    toolsContainer.innerHTML = "";

    tools.forEach(tool => {

        toolsContainer.innerHTML += `
            <div class="tool-card" data-category="${tool.category}">

                <div class="tool-header">

                <img src="${tool.logo}" alt="${tool.name}">

                <span class="favorite-btn">🤍</span>

                <span class="badge free">${tool.price}</span>

                </div>

                <h3>${tool.name}</h3>

                <div class="rating">
                    ⭐⭐⭐⭐⭐ <span>${tool.rating}</span>
                </div>

                <p>${tool.description}</p>

                <div class="tool-buttons">

                    <a href="${tool.website}"
                       target="_blank"
                       class="visit-btn">
                        Visit Website
                    </a>

                    <a href="pages/tool.html?id=${tool.id}"
                       class="review-btn">
                        View Details
                    </a>

                </div>

            </div>
        `;

    });

}

// ---------- Search & Filter ----------

const searchInput = document.getElementById("toolSearch");
const filterButtons = document.querySelectorAll(".filter-btn");

function filterTools() {

    const cards = document.querySelectorAll(".tool-card");

    const search = searchInput
        ? searchInput.value.toLowerCase()
        : "";

    const activeButton = document.querySelector(".filter-btn.active");

    const category = activeButton
        ? activeButton.dataset.category
        : "all";

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        const description = card.querySelector("p").textContent.toLowerCase();

        const cardCategory = card.dataset.category;

        const matchSearch =
            title.includes(search) ||
            description.includes(search);

        const matchCategory =
            category === "all" ||
            category === cardCategory;

        card.style.display =
            (matchSearch && matchCategory)
            ? "block"
            : "none";

    });

}

if (searchInput) {

    searchInput.addEventListener("keyup", filterTools);

}

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active"));

        button.classList.add("active");

        filterTools();

    });

});

// ---------- Copy Prompt ----------

document.querySelectorAll(".copy-btn").forEach(button => {

    button.addEventListener("click", async () => {

        const card = button.closest(".prompt-card");

        const text = card.querySelector("h3").textContent;

        await navigator.clipboard.writeText(text);

        button.textContent = "✅ Copied";

        setTimeout(() => {

            button.textContent = "Copy Prompt";

        }, 2000);

    });

});

// Dark Mode

// =======================
// Dark Mode
// =======================

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });
}

// ===============================
// Favorites (Save in Browser)
// ===============================

document.addEventListener("click", function (e) {

    if (!e.target.classList.contains("favorite-btn")) return;

    const card = e.target.closest(".tool-card");
    const toolName = card.querySelector("h3").textContent;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(toolName)) {

        favorites = favorites.filter(item => item !== toolName);

        e.target.textContent = "🤍";
        e.target.classList.remove("active");

    } else {

        favorites.push(toolName);

        e.target.textContent = "❤️";
        e.target.classList.add("active");

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

});

// Restore Favorites

window.addEventListener("load", () => {

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    document.querySelectorAll(".tool-card").forEach(card => {

        const toolName = card.querySelector("h3").textContent;
        const heart = card.querySelector(".favorite-btn");

        if (favorites.includes(toolName)) {

            heart.textContent = "❤️";
            heart.classList.add("active");

        }

    });

});
// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}