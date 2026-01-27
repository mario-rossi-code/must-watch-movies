// Film (caricati da file)
fetch("./movies.json")
    .then((response) => response.json())
    .then((moviesArray) => {
        window.movies = moviesArray; // Salva in globale
        updateMovieList(); // Chiama solo dopo che window.movies è pronto
    });

// Film (locali)
// window.movies = [];

// API KEY per accedere a TMDB API
const apiKey = window.TMDB_API_KEY;
// URL base per le chiamate all'API di TMDb
const baseUrl = "https://api.themoviedb.org/3";
// Chiave per salvare lo stato dei film visti nel localStorage
const SEEN_KEY = "movieSeenStatus";

// Mappa per memorizzare i generi cinematografici
let genreMap = {};
// Array per memorizzare i film locali
let localMovies = [];
// Variabile per gestire i film in caricamento
let isLoading = true;
// Oggetto per memorizzare i metadati dei film
let movieMetadata = {};
// Mappa per tenere traccia dei film visti/da vedere
let seenMap = loadSeenMap();
// Timeout per la ricerca
let searchTimeout = null;
// Numero massimo di chiamate API simultanee
const MAX_CONCURRENT_REQUESTS = 5;
// Ritardo tra batch di richieste in ms
const REQUEST_DELAY = 200;
// Statistiche
const STATS_KEY = "movieCollectionStats";
// Aggiorna le statistiche ogni 24 ore
const STATS_INTERVAL = 1000 * 60 * 60 * 24;

// INDICI PER IL VIRTUAL SCROLLING
// Intervallo di visualizzazione (mostra 30 film alla volta)
let visibleStart = 0;
let visibleEnd = 30;
// Dimensione del batch per il caricamento infinito
const batchSize = 30;

// Messaggi mostrati durante il caricamento
const loadingMessages = [
    "Preparando i popcorn...",
    "Caricamento... ma senza jump scare, promesso!",
    "Stiamo cercando il telecomando...",
    "Un attimo, il gatto ha mangiato la pellicola...",
    "Ricordati di respirare durante le scene intense!",
    "Stiamo aggiungendo effetti speciali...",
    "Caricamento più lento di un horror anni '80...",
    "Stiamo controllando che non ci siano errori di continuity...",
    "Stiamo rendendo questo caricamento più epico di un finale di Christopher Nolan...",
    "Caricamento più lento di uno slow-motion di Zack Snyder...",
    "Un attimo, il buffering sta mangiando i nostri Oscar!",
    "Stiamo cercando di superare il test di Bechdel...",
    "‘Mi dispiace, Dave. Non posso caricare così in fretta.’ (Cit.)",
    "Sembra un piano del Joker, ma è solo il caricamento...",
    "Stiamo rimuovendo le CGI dei baffi...",
    "Stiamo aggiungendo una colonna sonora di Hans Zimmer...",
    "Se il caricamento fosse un genere, sarebbe ‘thriller psicologico’... ",
    "Nessun film è stato danneggiato durante questo caricamento.",
    "Stiamo evitando i cliché... ma il caricamento è inevitabile.",
    "‘Caricare o non caricare?’ - Shakespeare (mi sembra)",
    "Se il caricamento fosse un personaggio, sarebbe Jar Jar Binks... ma cerchiamo di migliorare!",
    "Caricamento più misterioso del significato di ‘Inception’...",
    "‘May the loading be with you.’",
    "Ops, il nostro assistente di regia si è addormentato!",
    "‘Houston, abbiamo un buffering.’",
    "Se il caricamento fosse un film, sarebbe The Irishman... lungo ma vale la pena!",
    "Stiamo aggiungendo più Easter egg di un Marvel post-credit...",
    "Se il caricamento fosse un villain, sarebbe Thanos... inevitabile.",
    "Stiamo cercando di non far spoiler...",
    "Stiamo evitando il uncanny valley...",
    "Se il caricamento fosse un cameo, sarebbe Stan Lee.",
    "Stiamo evitando i dialoghi di The Room... ‘Oh, hi loading!’",
    "Stiamo aggiungendo più pathos di un film di Pixar...",
    "‘Caricare, sempre caricare.’ - Cit. quasi famosa",
    "Stiamo rimuovendo le microespressioni da CGI...",
];

const alphabetLetters = [..."#ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const IMAGES_PATH = "assets/img/";

const colorArray = [
    // Settato al primo avvio
    {
        primary: "#ff5a9fff",
        translucent: "#ff2b8a80",
        icon: "icon-pink.png",
        placeholder: "placeholder-pink.webp",
    },
    {
        primary: "#ff7a33ff",
        translucent: "#ff5c0080",
        icon: "icon-orange.png",
        placeholder: "placeholder-orange.webp",
    },
    {
        primary: "#00c030ff",
        translucent: "#00ff3880",
        icon: "icon-green.png",
        placeholder: "placeholder-green.webp",
    },
    {
        primary: "#0c4ffaff",
        translucent: "#0050ff80",
        icon: "icon-blue.png",
        placeholder: "placeholder-blue.webp",
    },
    {
        primary: "#ffe600ff",
        translucent: "#fff00080",
        icon: "icon-yellow.png",
        placeholder: "placeholder-yellow.webp",
    },
    {
        primary: "#ba00ffff",
        translucent: "#ba00ff80",
        icon: "icon-violet.png",
        placeholder: "placeholder-violet.webp",
    },
    {
        primary: "#00cad1ff",
        translucent: "#00ffe180",
        icon: "icon-cyan.png",
        placeholder: "placeholder-cyan.webp",
    },
    {
        primary: "#fc2d2dff",
        translucent: "#ff000080",
        icon: "icon-red.png",
        placeholder: "placeholder-red.webp",
    },
];

let colorIndex = 0;
const root = document.documentElement;

// Controlla se c'è un colore salvato
const savedColorIndex = localStorage.getItem("colorIndex");
if (savedColorIndex !== null && colorArray[savedColorIndex]) {
    colorIndex = Number(savedColorIndex);
} else {
    // Se non c'è, imposta il primo colore e salva
    colorIndex = 0;
    localStorage.setItem("colorIndex", colorIndex);
}

// Applica il colore scelto
root.style.setProperty("--primary", colorArray[colorIndex].primary);
root.style.setProperty(
    "--primary-translucent",
    colorArray[colorIndex].translucent,
);
updateFavicon(colorArray[colorIndex].icon);

const colorSwitcher = document.getElementById("color-switcher");
if (colorSwitcher) {
    colorSwitcher.style.cursor = "pointer";
    colorSwitcher.title = "Cambia tema";

    colorSwitcher.addEventListener("click", () => {
        colorIndex = (colorIndex + 1) % colorArray.length;
        root.style.setProperty("--primary", colorArray[colorIndex].primary);
        root.style.setProperty(
            "--primary-translucent",
            colorArray[colorIndex].translucent,
        );
        localStorage.setItem("colorIndex", colorIndex);
        updateFavicon(colorArray[colorIndex].icon);

        // Aggiorna tutte le immagini di placeholder
        document.querySelectorAll('img[src*="placeholder-"]').forEach((img) => {
            img.src = IMAGES_PATH + colorArray[colorIndex].placeholder;
        });
    });
}

// Cambia la favicon
function updateFavicon(iconFile) {
    // Rimuovi tutte le favicon esistenti
    document.querySelectorAll('link[rel="icon"]').forEach((el) => el.remove());
    // Aggiungi la nuova favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = IMAGES_PATH + iconFile;
    document.head.appendChild(link);
}

/**
 * Elabora un array di elementi con un limite di operazioni concorrenti
 * @param {Array} items - Array di elementi da processare
 * @param {Function} processFn - Funzione asincrona da applicare ad ogni elemento
 * @param {number} concurrency - Numero massimo di operazioni concorrenti (default: MAX_CONCURRENT_REQUESTS)
 * @returns {Promise<Array>} Promise che si risolve con un array di risultati
 */
async function processWithConcurrency(
    items,
    processFn,
    concurrency = MAX_CONCURRENT_REQUESTS,
    updateCallback = null,
) {
    // console.log(
    //     "processWithConcurrency chiamato con",
    //     items.length,
    //     "elementi"
    // );
    const results = [];
    const queue = [...items];

    async function processQueue() {
        while (queue.length) {
            const item = queue.shift();
            try {
                // console.log(
                //     "Elaborazione elemento:",
                //     item.saga.saga,
                //     item.movieTitles.original
                // );
                const result = await processFn(item);
                results.push(result);
                if (updateCallback && result) {
                    // console.log(
                    //     "Chiamo callback per:",
                    //     result.id,
                    //     result.title
                    // );
                    updateCallback(result); // <-- Assicurati che questa riga sia presente
                }
            } catch (error) {
                console.error("Errore elaborazione elemento:", item, error);
                results.push(null);
            }
        }
    }

    const workers = Array(concurrency).fill().map(processQueue);
    await Promise.all(workers);
    // console.log(
    //     "processWithConcurrency completato, risultati:",
    //     results.filter((item) => item !== null).length
    // );
    return results.filter((item) => item !== null);
}

/**
 * Recupera i dati completi di un film da TMDb API
 * @param {Object} params - Parametri per la ricerca del film
 * @param {string} params.title - Titolo del film
 * @param {number} params.year - Anno di uscita
 * @param {number} params.movieId - ID del film su TMDb
 * @returns {Promise<Object|null>} Dettagli completi del film o null se non trovato
 */
async function fetchFullMovieData({ title, year, movieId }) {
    // console.log("fetchFullMovieData chiamato con:", { title, year, movieId });
    try {
        let movie;
        // Recuperare il trailer
        async function getTrailer(movieId) {
            let trailerUrl = null;
            try {
                // console.log("Cerco trailer per ID:", movieId);
                const videosResponse = await fetch(
                    `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}&language=it-IT`,
                );
                const videosData = await videosResponse.json();
                const trailerIt = videosData.results?.find(
                    (video) =>
                        video.type === "Trailer" && video.site === "YouTube",
                );
                if (trailerIt) {
                    trailerUrl = `https://www.youtube.com/watch?v=${trailerIt.key}`;
                    // console.log("Trailer trovato (IT):", trailerUrl);
                } else {
                    // console.log("Nessun trailer IT, cerco fallback...");
                    const fallbackResponse = await fetch(
                        `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}`,
                    );
                    const fallbackData = await fallbackResponse.json();
                    const fallbackTrailer = fallbackData.results?.find(
                        (video) =>
                            video.type === "Trailer" &&
                            video.site === "YouTube",
                    );
                    if (fallbackTrailer) {
                        trailerUrl = `https://www.youtube.com/watch?v=${fallbackTrailer.key}`;
                        // console.log("Trailer trovato (fallback):", trailerUrl);
                    }
                }
            } catch (err) {
                // console.warn("Errore nel recupero del trailer:", err);
            }
            return trailerUrl;
        }
        if (movieId) {
            // console.log("Recupero dettagli per ID TMDB:", movieId);
            const detailsResponse = await fetch(
                `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=it`,
            );
            const detailsData = await detailsResponse.json();
            // console.log(
            //     "Dettagli recuperati per ID:",
            //     movieId,
            //     detailsData.title
            // );
            const creditsResponse = await fetch(
                `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=it`,
            );
            const creditsData = await creditsResponse.json();
            const allCast =
                creditsData.cast?.slice(0, 10).map((actor) => actor.name) || [];
            const director =
                creditsData.crew?.find((member) => member.job === "Director")
                    ?.name || null;
            const trailerUrl = await getTrailer(movieId);
            const result = {
                ...detailsData,
                cast: allCast.join(", "),
                cast_full: allCast,
                cast_string: allCast.join(", "),
                director,
                original_year: detailsData.release_date
                    ? new Date(detailsData.release_date).getFullYear()
                    : null,
                trailer: trailerUrl,
            };
            // console.log("Ritorno dati completi per ID:", movieId, result.title);
            return result;
        } else if (title) {
            // console.log("Cerco film per titolo/anno:", title, year);
            const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=it&query=${encodeURIComponent(
                title,
            )}${year ? `&year=${year}` : ""}`;
            const searchResponse = await fetch(searchUrl);
            const searchData = await searchResponse.json();
            movie = searchData.results?.[0];
            if (!movie && year) {
                // console.log("Nessun risultato con anno, riprovo senza anno...");
                const fallbackUrl = `${baseUrl}/search/movie?api_key=${apiKey}&language=it&query=${encodeURIComponent(
                    title,
                )}`;
                const fallbackResponse = await fetch(fallbackUrl);
                const fallbackData = await fallbackResponse.json();
                movie = fallbackData.results?.[0];
            }
            if (movie) {
                // console.log("Film trovato in ricerca:", movie.title, movie.id);
                const detailsResponse = await fetch(
                    `${baseUrl}/movie/${movie.id}?api_key=${apiKey}&language=it`,
                );
                const detailsData = await detailsResponse.json();
                const creditsResponse = await fetch(
                    `${baseUrl}/movie/${movie.id}/credits?api_key=${apiKey}&language=it`,
                );
                const creditsData = await creditsResponse.json();
                const allCast =
                    creditsData.cast?.slice(0, 10).map((actor) => actor.name) ||
                    [];
                const director =
                    creditsData.crew?.find(
                        (member) => member.job === "Director",
                    )?.name || null;
                const trailerUrl = await getTrailer(movie.id);
                const result = {
                    ...movie,
                    runtime: detailsData.runtime,
                    cast: allCast.join(", "),
                    cast_full: allCast,
                    cast_string: allCast.join(", "),
                    director,
                    original_year: detailsData.release_date
                        ? new Date(detailsData.release_date).getFullYear()
                        : year,
                    trailer: trailerUrl,
                };
                // console.log(
                //     "Ritorno dati completi per titolo:",
                //     title,
                //     result.title
                // );
                return result;
            }
            // console.log("Nessun film trovato per:", title, year);
            return null;
        }
        return null;
    } catch (error) {
        // console.error("Errore in fetchFullMovieData:", error);
        return null;
    }
}

/**
 * Recupera la lista dei generi da TMDb
 */
async function fetchGenres() {
    try {
        const response = await fetch(
            `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=it`,
        );
        const data = await response.json();

        if (data.genres) {
            // Trasforma l'array dei generi in una mappa ID -> Nome
            genreMap = data.genres.reduce((acc, genre) => {
                acc[genre.id] = genre.name;
                return acc;
            }, {});
        }
    } catch (error) {
        console.error("Errore nel recupero dei generi:", error);
    }
}

/**
 * Crea una card HTML per un film
 * @param {Object} movie - Dettagli del film
 * @returns {HTMLElement} Elemento HTML della card
 */
function createMovieCard(movie, isPlaceholder = false) {
    // console.log(
    //     "createMovieCard chiamato per:",
    //     movie.id,
    //     movie.title,
    //     isPlaceholder ? "(placeholder)" : ""
    // );
    const cardTemplate = `
        <div class="card-wrapper" data-movie-id="${movie.id || ""}">
            <button class="button-seen ${seenMap[movie.id] ? "seen" : ""}">
                <i class="fa-solid ${
                    seenMap[movie.id] ? "fa-eye" : "fa-eye-slash"
                }"></i>
            </button>
            <div class="card-content">
                <div class="card-poster">
                    <div class="loading-spinner"></div>
                    <img loading="lazy"
                        src="${
                            isPlaceholder
                                ? IMAGES_PATH +
                                  colorArray[colorIndex].placeholder
                                : movie.poster_path
                                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                  : IMAGES_PATH +
                                    colorArray[colorIndex].placeholder
                        }"
                        alt="${movie.title || "Film"}"
                    >
                </div>
                <div class="card-overlay">
                    <div class="overlay-content">
                        <div class="details">
                            ${
                                isPlaceholder
                                    ? '<p class="genre">Caricamento...</p>'
                                    : movie.genre_ids &&
                                        movie.genre_ids.length > 0
                                      ? `<p class="genre">${movie.genre_ids
                                            .map(
                                                (id) =>
                                                    genreMap[id] ||
                                                    "Genere sconosciuto",
                                            )
                                            .join(", ")}</p>`
                                      : '<p class="genre">Genere non disponibile</p>'
                            }
                            <div class="meta-info">
                                ${
                                    isPlaceholder
                                        ? "<span>...</span>"
                                        : movie.release_date
                                          ? `<span>${new Date(
                                                movie.release_date,
                                            ).getFullYear()}</span>`
                                          : ""
                                }
                                ${
                                    isPlaceholder
                                        ? ""
                                        : movie.release_date && movie.runtime
                                          ? `<span> - </span>`
                                          : ""
                                }
                                ${
                                    isPlaceholder
                                        ? ""
                                        : movie.runtime && movie.runtime > 0
                                          ? `<span>${Math.floor(
                                                movie.runtime / 60,
                                            )}h ${movie.runtime % 60}m</span>`
                                          : "<span>Durata non disponibile</span>"
                                }
                            </div>
                            <p class="director"><strong>Regia:</strong> ${
                                isPlaceholder
                                    ? "Caricamento..."
                                    : movie.director || "-"
                            }</p>
                            <p class="cast"><strong>Cast:</strong> ${
                                isPlaceholder
                                    ? "Caricamento..."
                                    : movie.cast || "Caricamento..."
                            }</p>
                        </div>
                        <div class="overlay-plot">
                            <strong>Trama</strong>
                            <div class="plot-text">${
                                isPlaceholder
                                    ? "Caricamento..."
                                    : movie.overview || "Non disponibile"
                            }</div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="card-title">${
                movie.title_it || movie.title || "Titolo non disponibile"
            }</h3>

        <!-- Modale con dettagli -->
        <div class="modal-mobile">
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                <div class="modal-header">
                    <img loading="lazy" class="modal-poster" src="${
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : IMAGES_PATH + colorArray[colorIndex].placeholder
                    }" alt="${movie.title || "Film"}">
                    <div class="modal-header-info">
                        <h2 class="modal-title">${
                            movie.title_it ||
                            movie.title ||
                            "Titolo non disponibile"
                        }</h2>

                        <!-- Regista -->
                        <p class="modal-director"><strong>Regia:</strong> ${
                            movie.director || "Non disponibile"
                        }</p>

                        <!-- Anno e Durata -->
                        <p class="modal-meta">
                            ${
                                movie.release_date
                                    ? `${new Date(
                                          movie.release_date,
                                      ).getFullYear()}`
                                    : ""
                            }
                            ${
                                movie.runtime && movie.runtime > 0
                                    ? ` • ${Math.floor(movie.runtime / 60)}h ${
                                          movie.runtime % 60
                                      }m`
                                    : ""
                            }
                        </p>

                        <div class="buttons-box">
                            <!-- Bottone visto/da vedere -->
                            <button class="modal-button-seen ${
                                seenMap[movie.id] ? "seen" : ""
                            }">
                                <i class="fa-solid ${
                                    seenMap[movie.id]
                                        ? "fa-eye"
                                        : "fa-eye-slash"
                                }"></i>
                            </button>
                            <!-- Link trailer -->
                            <a class="modal-trailer-link" ${
                                movie.trailer
                                    ? 'href="' + movie.trailer + '"'
                                    : ""
                            } style="${movie.trailer ? "" : "display: none;"}">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                            <!-- ML -->
                            <a class="modal-ml-link" ${
                                movie.ml ? 'href="' + movie.ml + '"' : ""
                            } style="${movie.ml ? "" : "display: none;"}">
                                <i class="fa-solid fa-magnet"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <!-- Genere-->
                    <p class="modal-genre"><strong>Genere:</strong> Caricamento...</p>

                    <!-- Cast -->
                    <p class="modal-cast"><strong>Cast:</strong> Caricamento...</p>

                    <!-- Trama -->
                    <div class="modal-plot">
                        <strong>Trama</strong>
                        <div class="modal-plot-text">Caricamento...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    // Crea un elemento DOM dal template
    const template = document.createElement("template");
    template.innerHTML = cardTemplate.trim();
    const card = template.content.firstChild;
    // console.log("Card creata con ID:", movie.id);

    // Gestione del caricamento dell'immagine
    const img = card.querySelector(".card-poster img");
    const spinner = card.querySelector(".loading-spinner");

    img.addEventListener("load", () => {
        spinner.style.display = "none";
        img.parentElement.classList.add("loaded");
    });

    img.addEventListener("error", () => {
        img.src = IMAGES_PATH + colorArray[colorIndex].placeholder;
        spinner.style.display = "none";
        img.parentElement.classList.add("loaded");
    });

    // Aggiunge gestori eventi per i pulsanti "visto/non visto"
    const modalSeenBtn = card.querySelector(".modal-button-seen");
    modalSeenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSeen(movie.id);

        // Aggiorna entrambi i pulsanti
        seenBtn.classList.toggle("seen");
        modalSeenBtn.classList.toggle("seen");

        // Aggiorna le icone
        const icon = seenMap[movie.id] ? "fa-eye" : "fa-eye-slash";
        seenBtn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
        modalSeenBtn.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    });

    const seenBtn = card.querySelector(".button-seen");
    seenBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSeen(movie.id);
        seenBtn.classList.toggle("seen");
        seenBtn.innerHTML = seenMap[movie.id]
            ? '<i class="fa-solid fa-eye"></i>'
            : '<i class="fa-solid fa-eye-slash"></i>';
    });

    // Gestione del modale per mobile
    const cardContent = card.querySelector(".card-content");
    const modal = card.querySelector(".modal-mobile");
    const closeBtn = modal.querySelector(".modal-close");

    // Chiude il modale cliccando fuori
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";

            // Rimuovi evidenziazione dopo 2 secondi
            setTimeout(() => {
                if (window.highlightedCardContent === cardContent) {
                    cardContent.classList.remove("highlighted");
                    window.highlightedCardContent = null;
                }
            }, 2000);
        }
    });

    cardContent.addEventListener("click", () => {
        // FORZA l'aggiornamento del modale con i dati più recenti
        const currentMovieData = localMovies.find((m) => m.id === movie.id);
        if (currentMovieData) {
            updateMovieModal(card, currentMovieData, genreMap);
        }

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("closing");
        document.body.style.overflow = "auto";

        const content = modal.querySelector(".modal-content");

        content.addEventListener("animationend", function handler() {
            modal.classList.remove("active", "closing");
            content.removeEventListener("animationend", handler);

            // Rimuovi evidenziazione dopo 2 secondi
            setTimeout(() => {
                if (window.highlightedCardContent === cardContent) {
                    cardContent.classList.remove("highlighted");
                    window.highlightedCardContent = null;
                }
            }, 2000);
        });
    });

    return card;
}

/**
 * Restituisce un messaggio di caricamento casuale
 * @returns {string} Messaggio di caricamento
 */
function getRandomLoadingMessage() {
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}

/**
 * Crea un elemento HTML per i dettagli
 * @param {string} label - Etichetta del dettaglio
 * @param {string} content - Contenuto del dettaglio
 * @returns {HTMLElement} Elemento HTML del dettaglio
 */
function createDetailElement(label, content) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${label}:</strong> ${content}`;
    return p;
}

/**
 * Raggruppa i film per lettera iniziale del titolo
 * @param {Array} movies - Array di film
 * @returns {Object} Oggetto con film raggruppati per lettera iniziale
 */
function groupMoviesByLetter(movies) {
    const grouped = {};

    movies.forEach((movie) => {
        const movieTitle = movie.title_it || movie.title;
        if (!movieTitle) return;

        let firstChar = movieTitle.trim().charAt(0).toUpperCase();

        // Se non è una lettera A-Z, metti sotto "#"
        if (!firstChar.match(/[A-Z]/i)) {
            firstChar = "#";
        }

        if (!grouped[firstChar]) {
            grouped[firstChar] = [];
        }

        grouped[firstChar].push(movie);
    });

    return grouped;
}

/**
 * Mostra i film nel contenitore
 * @param {Array} movies - Array di film da visualizzare
 */
function displayMovies(movies) {
    // console.log("displayMovies chiamato con", movies.length, "film");
    const movieContainer = document.querySelector(".movie-cards-container");
    const fragment = document.createDocumentFragment();
    if (movies.length === 0) {
        // console.log("Nessun film da mostrare");
        const emptyMsg = document.createElement("p");
        emptyMsg.style.padding = "20px";
        emptyMsg.textContent = "Nessun risultato trovato";
        fragment.appendChild(emptyMsg);
    } else {
        const sortedMovies = [...movies].sort((a, b) => {
            const titleA = a.title_it || a.title || "";
            const titleB = b.title_it || b.title || "";
            return titleA.localeCompare(titleB, "it", { sensitivity: "base" });
        });
        const moviesByLetter = groupMoviesByLetter(sortedMovies);
        for (const [letter, movies] of Object.entries(moviesByLetter)) {
            // console.log(
            //     "Creo sezione per lettera:",
            //     letter,
            //     movies.length,
            //     "film"
            // );
            const section = document.createElement("div");
            section.id = "group-" + letter;
            const letterElement = document.createElement("div");
            letterElement.classList.add("alphabet-letter-box");
            const letterLink = document.createElement("a");
            letterLink.textContent = letter;
            letterLink.classList.add("alphabet-letter");
            letterElement.appendChild(letterLink);
            section.appendChild(letterElement);
            const row = document.createElement("div");
            row.classList.add("movies-row");
            for (const movie of movies) {
                const isPlaceholder = !movie.poster_path && !movie.overview;
                // console.log(
                //     "Creo card per:",
                //     movie.id,
                //     movie.title,
                //     isPlaceholder ? "(placeholder)" : ""
                // );
                const movieCard = createMovieCard(movie, isPlaceholder);
                row.appendChild(movieCard);
            }
            section.appendChild(row);
            fragment.appendChild(section);
        }
    }
    movieContainer.innerHTML = "";
    movieContainer.appendChild(fragment);
    attachAlphabetLetterEvents();
    // console.log("DOM aggiornato con", movies.length, "film");
}

/**
 * Mostra i film con virtual scrolling
 * @param {Array} movies - Array di film da visualizzare
 */
function displayMoviesVirtual(movies) {
    const movieContainer = document.querySelector(".movie-cards-container");
    movieContainer.innerHTML = "";

    // Mostra solo un sottoinsieme di film
    const visibleMovies = movies.slice(visibleStart, visibleEnd);
    displayMovies(visibleMovies);

    // Aggiunge scroll listener per il caricamento infinito
    movieContainer.addEventListener("scroll", () => {
        if (
            movieContainer.scrollTop + movieContainer.clientHeight >=
            movieContainer.scrollHeight - 100
        ) {
            // Carica più film quando si è vicini al fondo
            visibleEnd += batchSize;
            displayMoviesVirtual(movies);
        }
    });
}

/**
 * Carica la mappa dei film visti dal localStorage
 * @returns {Object} Mappa dei film visti
 */
function loadSeenMap() {
    try {
        return JSON.parse(localStorage.getItem(SEEN_KEY)) || {};
    } catch {
        return {};
    }
}

/**
 * Salva la mappa dei film visti nel localStorage
 * @param {Object} map - Mappa dei film visti
 */
function saveSeenMap(map) {
    localStorage.setItem(SEEN_KEY, JSON.stringify(map));
}

/**
 * Cambia lo stato "visto/non visto" di un film
 * @param {number} id - ID del film
 */
function toggleSeen(id) {
    if (!seenMap[id]) {
        // Segna come visto e salva la data corrente
        seenMap[id] = {
            seen: true,
            watchedDate: new Date().toISOString(),
        };
    } else {
        // Se già visto, rimuovi la data e segna come da vedere
        seenMap[id] = undefined;
    }
    saveSeenMap(seenMap);

    // Aggiorna le statistiche
    localStorage.removeItem("lastStatsUpdate");
    localStorage.removeItem(STATS_KEY);
}

/**
 * Filtra i film in base al termine di ricerca e allo stato "visto"
 * @param {string} searchTerm - Termine di ricerca
 */
function filterMovies(searchTerm) {
    if (isLoading) return; // Non filtrare se ancora in caricamento iniziale

    const filterState =
        document.getElementById("filter-seen")?.dataset.filter || "all";
    const searchTermLower = searchTerm.toLowerCase();

    requestAnimationFrame(() => {
        const filtered = localMovies.filter((movie) => {
            const isSeen = !!seenMap[movie.id];
            if (filterState === "seen" && !isSeen) return false;
            if (filterState === "to-see" && isSeen) return false;

            if (!searchTerm) return true;

            const searchableText = [
                movie.title,
                movie.title_it,
                movie.original_title,
                movie.genre_ids?.map((id) => genreMap[id]).join(" "),
                movie.saga,
                movie.cast_string,
                movie.director,
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(searchTermLower);
        });

        displayMovies(filtered);
    });
}

// Inizializza l'applicazione al caricamento della pagina
window.onload = updateMovieList;

// Gestione della ricerca in tempo reale
document.querySelector(".search-input").addEventListener("input", function (e) {
    const searchTerm = e.target.value.trim();

    // Cancella il timeout precedente per evitare chiamate multiple
    clearTimeout(searchTimeout);

    // Imposta un nuovo timeout per la ricerca
    searchTimeout = setTimeout(() => {
        filterMovies(searchTerm);
    }, 300); // 300ms di ritardo
});

// Gestione del pulsante di reset della ricerca
const searchInput = document.querySelector(".search-input");
const searchClear = document.querySelector(".search-clear");

// Mostra/nasconde il pulsante di reset in base al contenuto
searchInput.addEventListener("input", function (e) {
    if (e.target.value.trim().length > 0) {
        searchClear.style.display = "block";
    } else {
        searchClear.style.display = "none";
    }
    filterMovies(e.target.value);
});

// Resetta la ricerca
searchClear.addEventListener("click", function () {
    searchInput.value = "";
    searchClear.style.display = "none";
    filterMovies("");
    searchInput.focus();
});

// Gestione del filtro "visti/non visti"
document.getElementById("filter-seen").addEventListener("click", () => {
    const btn = document.getElementById("filter-seen");
    const states = ["all", "to-see", "seen"];
    const tooltips = {
        all: "Mostra tutti",
        "to-see": "Mostra da vedere",
        seen: "Mostra visti",
    };
    const current = btn.dataset.filter;
    const next = states[(states.indexOf(current) + 1) % states.length];

    btn.dataset.filter = next;
    btn.setAttribute("data-tooltip", tooltips[next]);

    btn.innerHTML =
        next === "to-see"
            ? '<i class="fa-solid fa-eye-slash"></i>'
            : '<i class="fa-solid fa-eye"></i>';

    filterMovies(document.querySelector(".search-input").value);
});

// Ricarica le card quando la finestra viene ridimensionata
window.addEventListener("resize", function () {
    if (
        (window.innerWidth <= 768 && window.innerWidth > 768 - 1) ||
        (window.innerWidth > 768 && window.innerWidth <= 768 + 1)
    ) {
        displayMovies(localMovies);
    }
});

/**
 * Aggiorna la lista dei film
 */
async function updateMovieList() {
    // console.log("--- Inizio updateMovieList ---");

    const movieContainer = document.querySelector(".movie-cards-container");
    movieContainer.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">${getRandomLoadingMessage()}</div>
    `;

    // Recupera i generi
    await fetchGenres();
    // console.log("Generi caricati:", genreMap);

    // Crea subito le card placeholder
    const allMoviesToProcess = [];
    const placeholderMovies = [];
    for (let saga of window.movies) {
        for (let movieTitles of saga.films) {
            const placeholderMovie = {
                id:
                    movieTitles.tmdb_id ||
                    `custom-${saga.saga}-${movieTitles.original}-${movieTitles.year}`,
                title: movieTitles.original,
                title_it: movieTitles.it,
                saga: saga.saga,
                poster_path: null,
                overview: "Caricamento...",
                genre_ids: [],
                cast_string: "",
                director: null,
                release_date: null,
                runtime: null,
                ml: movieTitles.ml || null,
            };
            // console.log(
            //     "Placeholder creato:",
            //     placeholderMovie.id,
            //     placeholderMovie.title
            // );
            placeholderMovies.push(placeholderMovie);
            allMoviesToProcess.push({ saga, movieTitles });
        }
    }

    // Mostra subito le card placeholder
    localMovies = [...placeholderMovies];
    // console.log("Film placeholder creati:", localMovies.length);
    displayMovies(localMovies);
    isLoading = false;
    // console.log("DOM aggiornato con placeholder");

    // Processa i film con concorrenza controllata
    // console.log("Inizio caricamento dati film...");
    await processWithConcurrency(
        allMoviesToProcess,
        async ({ saga, movieTitles }) => {
            // console.log(
            //     "Caricamento dati per:",
            //     movieTitles.original,
            //     movieTitles.year
            // );
            let movieDetails;
            if (movieTitles.tmdb_id === null) {
                const result = {
                    id: `custom-${saga.saga}-${movieTitles.original}-${movieTitles.year}`,
                    title: movieTitles.original,
                    title_it: movieTitles.it,
                    original_title: movieTitles.original,
                    release_date: movieTitles.year
                        ? `${movieTitles.year}-01-01`
                        : null,
                    saga: saga.saga,
                    poster_path: null,
                    overview: "Descrizione non disponibile",
                    genre_ids: [],
                    cast_string: "",
                };
                // console.log(
                //     "Film senza ID TMDB, ritorno placeholder:",
                //     result.id
                // );
                return result;
            }
            if (movieTitles.tmdb_id) {
                // console.log("Cerco film con ID TMDB:", movieTitles.tmdb_id);
                movieDetails = await fetchFullMovieData({
                    movieId: movieTitles.tmdb_id,
                });
                if (movieDetails) {
                    movieDetails.id = movieTitles.tmdb_id;
                    // console.log(
                    //     "Film trovato con ID TMDB:",
                    //     movieDetails.id,
                    //     movieDetails.title
                    // );
                }
            } else {
                // console.log(
                //     "Cerco film per titolo/anno:",
                //     movieTitles.original,
                //     movieTitles.year
                // );
                movieDetails = await fetchFullMovieData({
                    title: movieTitles.original,
                    year: movieTitles.year,
                });
                if (movieDetails) {
                    movieDetails.id = `custom-${saga.saga}-${movieTitles.original}-${movieTitles.year}`;
                    // console.log(
                    //     "Film trovato per titolo/anno:",
                    //     movieDetails.id,
                    //     movieDetails.title
                    // );
                }
            }
            if (movieDetails) {
                movieDetails.saga = saga.saga;
                movieDetails.title_it = movieTitles.it;
                if (movieTitles.trailer)
                    movieDetails.trailer = movieTitles.trailer;
                if (movieTitles.ml) movieDetails.ml = movieTitles.ml;
                return movieDetails;
            }
            // console.log("Nessun dato trovato per:", movieTitles.original);
            return null;
        },
        5, // Numero di lavoratori concorrenti
        (movieDetails) => {
            // Callback esplicita per aggiornare le card e il modale
            if (movieDetails) {
                // console.log(
                //     "Callback: Aggiorno card e modale per:",
                //     movieDetails.id,
                //     movieDetails.title
                // );
                const index = localMovies.findIndex(
                    (m) => m.id === movieDetails.id,
                );
                if (index !== -1) {
                    localMovies[index] = movieDetails;
                    updateMovieCard(movieDetails);
                    // Trova la card associata a questo film
                    const card = document.querySelector(
                        `.card-wrapper[data-movie-id="${movieDetails.id}"]`,
                    );
                    if (card) {
                        // Aggiorna il modale associato alla card
                        updateMovieModal(card, movieDetails, genreMap);
                    }
                } else {
                    // console.warn(
                    //     "Film non trovato in localMovies:",
                    //     movieDetails.id
                    // );
                }
            }
        },
    );

    showButtons();

    // console.log("--- Fine updateMovieList ---");
}

function updateMovieCard(movieDetails) {
    // console.log(
    //     "updateMovieCard chiamato per:",
    //     movieDetails.id,
    //     movieDetails.title
    // );
    const card = document.querySelector(
        `.card-wrapper[data-movie-id="${movieDetails.id}"]`,
    );
    if (!card) {
        // console.warn("Card non trovata nel DOM per ID:", movieDetails.id);
        return;
    }
    // console.log("Card trovata, aggiorno contenuto...");

    const img = card.querySelector(".card-poster img");
    const genreEl = card.querySelector(".genre");
    const metaInfoEl = card.querySelector(".meta-info");
    const directorEl = card.querySelector(".director");
    const castEl = card.querySelector(".cast");
    const plotEl = card.querySelector(".plot-text");

    if (movieDetails.poster_path) {
        // console.log("Aggiorno poster:", movieDetails.poster_path);
        img.src = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    }
    if (movieDetails.genre_ids && movieDetails.genre_ids.length > 0) {
        // console.log("Aggiorno generi:", movieDetails.genre_ids);
        genreEl.innerHTML = movieDetails.genre_ids
            .map((id) => genreMap[id] || "Genere sconosciuto")
            .join(", ");
    } else if (genreEl) {
        genreEl.innerHTML = "Genere non disponibile";
    }

    if (movieDetails.release_date) {
        const year = new Date(movieDetails.release_date).getFullYear();
        // console.log("Aggiorno anno/durata:", year, movieDetails.runtime);
        metaInfoEl.innerHTML = `<span>${year}</span>`;
        if (movieDetails.runtime) {
            metaInfoEl.innerHTML += `<span> - </span><span>${Math.floor(
                movieDetails.runtime / 60,
            )}h ${movieDetails.runtime % 60}m</span>`;
        }
    } else if (metaInfoEl) {
        metaInfoEl.innerHTML = "<span>Anno non disponibile</span>";
    }

    if (movieDetails.director) {
        // console.log("Aggiorno regista:", movieDetails.director);
        directorEl.innerHTML = `<strong>Regia:</strong> ${movieDetails.director}`;
    } else if (directorEl) {
        directorEl.innerHTML = "<strong>Regia:</strong> -";
    }

    if (movieDetails.cast) {
        // console.log("Aggiorno cast:", movieDetails.cast);
        castEl.innerHTML = `<strong>Cast:</strong> ${movieDetails.cast}`;
    } else if (castEl) {
        castEl.innerHTML = "<strong>Cast:</strong> Caricamento...";
    }

    if (movieDetails.overview) {
        // console.log(
        //     "Aggiorno trama:",
        //     movieDetails.overview.substring(0, 50) + "..."
        // );
        plotEl.innerHTML = movieDetails.overview;
    } else if (plotEl) {
        plotEl.innerHTML = "Non disponibile";
    }

    const spinner = card.querySelector(".loading-spinner");
    if (spinner) {
        // console.log("Rimuovo spinner...");
        spinner.style.display = "none";
    }
}

// Funzione per aggiornare il modale
function updateMovieModal(card, movieDetails, genreMap) {
    // console.log(
    //     "updateMovieModal chiamato per:",
    //     movieDetails.id,
    //     movieDetails.title
    // );
    const modal = card.querySelector(".modal-mobile");
    if (!modal) {
        // console.warn("Modale non trovato per la card:", movieDetails.id);
        return;
    }

    // Controlla che ogni elemento esista prima di aggiornarlo
    const modalPoster = modal.querySelector(".modal-poster");
    const modalTitle = modal.querySelector(".modal-title");
    const modalDirector = modal.querySelector(".modal-director");
    const modalMeta = modal.querySelector(".modal-meta");
    const modalGenre = modal.querySelector(".modal-genre");
    const modalCast = modal.querySelector(".modal-cast");
    const modalPlot = modal.querySelector(".modal-plot-text");
    const modalTrailerLink = modal.querySelector(".modal-trailer-link");
    const modalMLLink = modal.querySelector(".modal-ml-link");

    if (modalPoster && movieDetails.poster_path) {
        modalPoster.src = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
    }

    if (modalTitle) {
        modalTitle.textContent =
            movieDetails.title_it ||
            movieDetails.title ||
            "Titolo non disponibile";
    }

    if (modalDirector) {
        modalDirector.innerHTML = movieDetails.director
            ? `<strong>Regia:</strong> ${movieDetails.director}`
            : "<strong>Regia:</strong> -";
    }

    if (modalMeta) {
        if (movieDetails.release_date) {
            const year = new Date(movieDetails.release_date).getFullYear();
            let metaText = `${year}`;
            if (movieDetails.runtime) {
                metaText += ` • ${Math.floor(movieDetails.runtime / 60)}h ${
                    movieDetails.runtime % 60
                }m`;
            }
            modalMeta.innerHTML = metaText;
        } else {
            modalMeta.innerHTML = "";
        }
    }

    if (modalGenre) {
        if (movieDetails.genre_ids && movieDetails.genre_ids.length > 0) {
            modalGenre.innerHTML = `<strong>Genere:</strong> ${movieDetails.genre_ids
                .map((id) => genreMap[id] || "Genere sconosciuto")
                .join(", ")}`;
        } else {
            modalGenre.innerHTML = "<strong>Genere:</strong> -";
        }
    }

    if (modalCast) {
        if (movieDetails.cast_full) {
            modalCast.innerHTML = `<strong>Cast:</strong> ${movieDetails.cast_full.join(
                ", ",
            )}`;
        } else {
            modalCast.innerHTML = "<strong>Cast:</strong> -";
        }
    }

    if (modalPlot) {
        modalPlot.innerHTML = movieDetails.overview || "Non disponibile";
    }

    if (modalTrailerLink) {
        if (movieDetails.trailer) {
            modalTrailerLink.href = movieDetails.trailer;
            modalTrailerLink.style.display = "flex";
        } else {
            modalTrailerLink.style.display = "none";
        }
    }

    if (modalMLLink) {
        if (movieDetails.ml) {
            modalMLLink.href = movieDetails.ml;
            modalMLLink.style.display = "flex";
        } else {
            modalMLLink.style.display = "none";
        }
    }
}

async function processWithConcurrency(
    items,
    processFn,
    concurrency = MAX_CONCURRENT_REQUESTS,
    updateCallback = null,
) {
    const results = [];
    const queue = [...items];

    async function processQueue() {
        while (queue.length) {
            const item = queue.shift();
            try {
                const result = await processFn(item);
                results.push(result);
                if (updateCallback && result) {
                    updateCallback(result);
                }
            } catch (error) {
                console.error("Error processing item:", item, error);
                results.push(null);
            }
        }
    }

    const workers = Array(concurrency).fill().map(processQueue);
    await Promise.all(workers);
    return results.filter((item) => item !== null);
}

// Funzione per calcolare le statistiche
function calculateStatistics() {
    const now = Date.now();
    const lastStatsUpdate = localStorage.getItem("lastStatsUpdate");

    // Se le statistiche sono aggiornate (meno di 24 ore fa), le recupera
    if (lastStatsUpdate && now - parseInt(lastStatsUpdate) < STATS_INTERVAL) {
        const cachedStats = localStorage.getItem(STATS_KEY);
        if (cachedStats) {
            return JSON.parse(cachedStats);
        }
    }

    // Calcola le nuove statistiche
    const stats = {
        totalMovies: localMovies.length,
        watchedMovies: 0,
        toWatchMovies: 0,
        totalWatchTime: 0,
        genreStats: {},
        monthlyStats: {},
        yearlyStats: {},
        lastUpdated: now,
    };

    // Calcola le statistiche
    localMovies.forEach((movie) => {
        const seenEntry = seenMap[movie.id];
        const isWatched = seenEntry && seenEntry.seen;

        if (isWatched) {
            stats.watchedMovies++;

            // Aggiunge il tempo di visione (in minuti)
            if (movie.runtime) {
                stats.totalWatchTime += movie.runtime;
            }

            // Statistiche per genere
            if (movie.genre_ids) {
                movie.genre_ids.forEach((genreId) => {
                    const genreName = genreMap[genreId] || "Sconosciuto";
                    stats.genreStats[genreName] =
                        (stats.genreStats[genreName] || 0) + 1;
                });
            }

            // Statistiche per mese e anno di visione
            if (seenEntry.watchedDate) {
                const date = new Date(seenEntry.watchedDate);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const monthYear = `${year}-${month
                    .toString()
                    .padStart(2, "0")}`;

                stats.monthlyStats[monthYear] =
                    (stats.monthlyStats[monthYear] || 0) + 1;
                stats.yearlyStats[year] = (stats.yearlyStats[year] || 0) + 1;
            }
        }
    });

    stats.toWatchMovies = stats.totalMovies - stats.watchedMovies;

    // Salva le statistiche
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    localStorage.setItem("lastStatsUpdate", now.toString());

    return stats;
}

// Funzione per generare il grafico cartesiano
function createCartesianChart(data, isYearly = false) {
    // Prepara i dati per il grafico
    let labels = [];
    let values = [];

    if (isYearly) {
        // Per il grafico annuale
        const years = Object.keys(data).sort();
        labels = years;
        values = years.map((year) => data[year]);
    } else {
        // Per il grafico mensile
        const months = Object.keys(data).sort();
        // Formatta le etichette dei mesi
        labels = months.map((month) => {
            const [year, monthNum] = month.split("-");
            const monthNames = [
                "Gen",
                "Feb",
                "Mar",
                "Apr",
                "Mag",
                "Giu",
                "Lug",
                "Ago",
                "Set",
                "Ott",
                "Nov",
                "Dic",
            ];
            return `${monthNames[parseInt(monthNum) - 1]} ${year}`;
        });
        values = months.map((month) => data[month]);
    }

    // Trova il valore massimo per scalare l'altezza delle barre
    const maxValue = Math.max(...values);

    // Crea il grafico
    const chartHtml = `
                <div class="cartesian-chart">
                    <div class="y-axis">
                        ${Array.from({ length: 5 }, (_, i) => {
                            const value = Math.round((maxValue * (5 - i)) / 5);
                            return `<span>${value}</span>`;
                        }).join("")}
                    </div>
                    ${values
                        .map((value, index) => {
                            const height =
                                maxValue > 0 ? (value / maxValue) * 180 : 0;
                            return `
                            <div class="cartesian-bar">
                                <div class="bar" style="height: ${height}px">
                                    <span class="bar-value">${value}</span>
                                </div>
                                <div class="axis-label">${labels[index]}</div>
                            </div>
                        `;
                        })
                        .join("")}
                </div>
            `;

    return chartHtml;
}

// Mock statistiche (TEST)
function getMockStats() {
    // Mock: ultimi 12 mesi
    const now = new Date();
    const monthlyStats = {};
    for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
            2,
            "0",
        )}`;
        monthlyStats[key] = Math.floor(Math.random() * 20) + 1; // 1-8 film visti
    }
    // Mock: ultimi 5 anni
    const yearlyStats = {};
    for (let y = now.getFullYear() - 4; y <= now.getFullYear(); y++) {
        yearlyStats[y] = Math.floor(Math.random() * 40) + 10; // 10-50 film visti
    }
    return { monthlyStats, yearlyStats };
}

// Mostra il modale delle statistiche
function showStatistics() {
    const stats = calculateStatistics();

    // Inserisce il mock (TEST)
    // const mock = getMockStats();
    // stats.monthlyStats = mock.monthlyStats;
    // stats.yearlyStats = mock.yearlyStats;

    // Se non ci sono film visti, nascondiamo il carosello
    const isEmptyStats = stats.watchedMovies === 0;

    // Crea il modale delle statistiche
    const statsModal = document.createElement("div");
    statsModal.className = "stats-modal";
    statsModal.innerHTML = `
        <div class="stats-modal-content">
            <button class="stats-modal-close"><i class="fas fa-times"></i></button>
            <h2><i class="fa-solid fa-chart-simple"></i> Statistiche </h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${stats.watchedMovies}</div>
                    <div class="stat-label">Film Visti</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">${stats.toWatchMovies}</div>
                    <div class="stat-label">Da Vedere</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">${stats.totalMovies}</div>
                    <div class="stat-label">Totale Film</div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">${Math.round(
                        stats.totalWatchTime / 60,
                    )}h</div>
                    <div class="stat-label">Tempo Totale</div>
                </div>
            </div>
            
            ${
                !isEmptyStats
                    ? `
                <div class="chart-container genre-chart">
                    <h3>Generi più Visti</h3>
                    <div class="genre-chart">
                        ${Object.entries(stats.genreStats)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 8)
                            .map(
                                ([genre, count]) => `
                                <div class="chart-bar">
                                    <div class="bar-label">${genre}</div>
                                    <div class="bar-container">
                                        <div class="bar-fill" style="width: ${
                                            (count / stats.watchedMovies) * 100
                                        }%">
                                            <span class="bar-value">${count}</span>
                                        </div>
                                    </div>
                                </div>
                            `,
                            )
                            .join("")}
                    </div>
                </div>`
                    : ""
            }
                
                ${
                    !isEmptyStats
                        ? `
                <div class="chart-container monthly-yearly-charts">
                    <div class="carousel-container">
                        <div class="carousel">
                            <div class="carousel-chart">
                                <h3>Film visti per Mese</h3>
                                ${createCartesianChart(
                                    stats.monthlyStats,
                                    false,
                                )}
                            </div>
                            <div class="carousel-chart">
                                <h3>Film visti per Anno</h3>
                                ${createCartesianChart(stats.yearlyStats, true)}
                            </div>
                        </div>
                        <div class="carousel-nav">
                            <div class="carousel-dot active" data-index="0"></div>
                            <div class="carousel-dot" data-index="1"></div>
                        </div>
                    </div>
                </div>`
                        : ""
                }
            </div>
        </div>
    `;

    document.body.appendChild(statsModal);

    // Gestione della chiusura
    const closeBtn = statsModal.querySelector(".stats-modal-close");
    closeBtn.addEventListener("click", () => {
        statsModal.remove();
    });

    statsModal.addEventListener("click", (e) => {
        if (e.target === statsModal) {
            statsModal.remove();
        }
    });

    // Gestione del carosello
    const carousel = statsModal.querySelector(".carousel");
    const dots = statsModal.querySelectorAll(".carousel-dot");
    let currentIndex = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            if (index !== currentIndex) {
                currentIndex = index;
                updateCarousel();
            }
        });
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    // Aggiunge supporto per lo swipe (opzionale)
    let startX = 0;
    carousel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) {
            // Soglia per considerare uno swipe
            if (diffX > 0 && currentIndex < dots.length - 1) {
                // Swipe a sinistra
                currentIndex++;
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe a destra
                currentIndex--;
            }
            updateCarousel();
        }
    });
}

// Bottone per statistiche
const statsButton = document.querySelector(".stats-button");
statsButton.addEventListener("click", showStatistics);

// Bottone per film casuale
const randomMovieButton = document.querySelector(".random-movie-button");

// Mostra il bottone quando le card sono renderizzate
function showButtons() {
    randomMovieButton.classList.add("visible");
    statsButton.classList.add("visible");
}

randomMovieButton.addEventListener("click", async function () {
    // Resetta la ricerca e svuota il campo
    const searchInput = document.querySelector(".search-input");
    const searchClear = document.querySelector(".search-clear");
    searchInput.value = "";
    searchClear.style.display = "none";
    filterMovies("");

    // Attende che l'aggiornamento del DOM sia completato
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Trova un film casuale tra quelli da vedere
    const randomMovie = getRandomUnseenMovie();
    if (!randomMovie) return;

    console.log("Film casuale selezionato:", randomMovie.id, randomMovie.title);

    // Trova la card corrispondente nella lista
    const allCards = document.querySelectorAll(".card-wrapper");
    const targetCard = Array.from(allCards).find((card) => {
        const movieId = card.getAttribute("data-movie-id");
        return movieId === randomMovie.id.toString();
    });

    if (targetCard) {
        console.log("Card trovata nel DOM, aggiorno modale...");

        // Assicurati che i dati siano aggiornati nel modale
        updateMovieModal(targetCard, randomMovie, genreMap);

        // Evidenzia la card
        const cardContent = targetCard.querySelector(".card-content");
        cardContent.classList.add("highlighted");

        // Salva il riferimento globale
        window.highlightedCardContent = cardContent;

        // Scrolla fino alla card
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });

        // Attende un momento per lo scroll
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Apri il modale (simula click sulla card)
        const clickEvent = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        cardContent.dispatchEvent(clickEvent);

        // Forza l'aggiornamento del modale dopo l'apertura
        setTimeout(() => {
            updateMovieModal(targetCard, randomMovie, genreMap);
        }, 300);
    } else {
        console.warn("Card non trovata per il film:", randomMovie.title);
    }
});

// Versione migliorata di getRandomUnseenMovie
function getRandomUnseenMovie() {
    // Filtra i film che hanno dati completi (non placeholder)
    const validMovies = localMovies.filter(
        (movie) =>
            movie &&
            movie.id &&
            !movie.id.startsWith("custom-") &&
            !seenMap[movie.id],
    );

    if (validMovies.length === 0) {
        // Se non ci sono film validi, prova con tutti i film non visti
        const unseenMovies = localMovies.filter((movie) => !seenMap[movie.id]);
        if (unseenMovies.length === 0) {
            alert("Hai già visto tutti i film della collezione!");
            return null;
        }
        return unseenMovies[Math.floor(Math.random() * unseenMovies.length)];
    }

    return validMovies[Math.floor(Math.random() * validMovies.length)];
}

// Trova un film casuale tra quelli da vedere
function getRandomUnseenMovie() {
    const unseenMovies = localMovies.filter((movie) => !seenMap[movie.id]);
    if (unseenMovies.length === 0) {
        alert("Hai già visto tutti i film della collezione!");
        return null;
    }
    return unseenMovies[Math.floor(Math.random() * unseenMovies.length)];
}

// Apre il modale di un film casuale, scrolla alla card e la evidenzia
function openRandomMovieModal() {
    // Resetta la ricerca e svuota il campo di inserimento
    const searchInput = document.querySelector(".search-input");
    const searchClear = document.querySelector(".search-clear");

    searchInput.value = "";
    searchClear.style.display = "none";
    filterMovies("");

    const randomMovie = getRandomUnseenMovie();
    if (!randomMovie) return;

    // Crea una card temporanea per il modale
    const tempCard = createMovieCard(randomMovie);
    document.body.appendChild(tempCard);

    // Apre il modale
    const modal = tempCard.querySelector(".modal-mobile");
    const closeBtn = modal.querySelector(".modal-close");

    // Trova la card corrispondente nella lista
    const allCards = document.querySelectorAll(".card-wrapper");
    const targetCard = Array.from(allCards).find((card) => {
        const title = card.querySelector(".card-title").textContent;
        return title === (randomMovie.title_it || randomMovie.title);
    });

    if (targetCard) {
        // Aggiunge la classe highlighted
        const cardContent = targetCard.querySelector(".card-content");
        cardContent.classList.add("highlighted");

        // Scrolla fino alla card
        targetCard.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }

    // Rimuove la card temporanea quando il modale viene chiuso
    closeBtn.addEventListener("click", () => {
        modal.classList.add("closing");
        document.body.style.overflow = "auto";

        const content = modal.querySelector(".modal-content");

        content.addEventListener("animationend", function handler() {
            modal.classList.remove("active", "closing");
            content.removeEventListener("animationend", handler);

            // Attende 3 secondi
            setTimeout(() => {
                if (window.highlightedCardContent) {
                    window.highlightedCardContent.classList.remove(
                        "highlighted",
                    );
                    window.highlightedCardContent = null;
                }
            }, 2000);
        });
    });

    // Apri il modale
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Gestione modale di navigazione per lettera
function openAlphabetModal() {
    const modal = document.getElementById("alphabet-modal");
    const lettersContainer = modal.querySelector(".alphabet-letters");
    lettersContainer.innerHTML = "";

    alphabetLetters.forEach((letter) => {
        const btn = document.createElement("a");
        btn.textContent = letter;
        btn.addEventListener("click", () => {
            closeAlphabetModal();
            scrollToLetterGroup(letter);
        });
        lettersContainer.appendChild(btn);
    });

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Chiude il modale
function closeAlphabetModal() {
    const modal = document.getElementById("alphabet-modal");
    modal.style.display = "none";
    document.body.style.overflow = "";
}

// Scrolla al gruppo della lettera
function scrollToLetterGroup(letter) {
    // I gruppi devono avere un id tipo "group-A"
    const groupId = "group-" + letter;
    const el = document.getElementById(groupId);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Chiude modale su X o click fuori
document
    .querySelector(".alphabet-modal-close")
    .addEventListener("click", closeAlphabetModal);
document
    .getElementById("alphabet-modal")
    .addEventListener("click", function (e) {
        if (e.target === this) closeAlphabetModal();
    });

function attachAlphabetLetterEvents() {
    document.querySelectorAll(".alphabet-letter").forEach((el) => {
        el.addEventListener("click", openAlphabetModal);
    });
}
