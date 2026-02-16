const apiKey = "f2cea50a194a40e38a956b8b24a00e0c";
// const apiKey = "api_live_TCtPShCe2BTQr1DCR90RtnES445AsHvFlIFUoSAcLGuhv";
const newsContainer = document.getElementById("newsContainer");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");
const searchBtn = document.getElementById("searchBtn");

window.onload = () => fetchNews("technology");

searchBtn.addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    if (query) fetchNews(query);
});

async function fetchNews(query) {
    showLoader(true);
    errorDiv.classList.add("hidden");

    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${query}&language=fr&sortBy=publishedAt&apiKey=${apiKey}`
        );

        const data = await response.json();

        if (data.articles.length === 0) {
            showError("Aucun résultat trouvé.");
        } else {
            displayNews(data.articles);
        }

    } catch (error) {
        showError("Erreur de chargement.");
    }

    showLoader(false);
}

function displayNews(articles) {
    newsContainer.innerHTML = "";

    articles.slice(0, 12).forEach(article => {
        const card = `
            <div class="card">
                <img src="${article.urlToImage || 'https://via.placeholder.com/400x200'}">
                <div class="card-content">
                    <h3>${article.title}</h3>
                    <p>${article.description || ''}</p>
                    <a href="${article.url}" target="_blank">Lire l'article →</a>
                </div>
            </div>
        `;

        newsContainer.innerHTML += card;
    });
}

function showLoader(state) {
    loader.classList.toggle("hidden", !state);
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}
