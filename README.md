# 📦 La Collezione del Nerd

**La Collezione del Nerd** è un'applicazione web che consente di **visualizzare, organizzare e cercare una collezione di film**. Utilizza l'API di [TMDb (The Movie Database)](https://www.themoviedb.org/) per ottenere informazioni dettagliate sui film, come poster, cast, regia, trama e generi.

---

## 🌐 Panoramica

- **Frontend responsive** con ricerca e filtri
- **Integrazione API TMDb**
- **Gestione dello stato "visto/non visto"** tramite `localStorage`
- **Funzionalità film casuale**
- **Ottimizzazioni per performance elevate**

---

## 📁 Struttura del Progetto

### File Principali

| File         | Descrizione                         |
|--------------|------------------------------------ |
| `index.html` | Struttura base della pagina web     |
| `style.css`  | Stili CSS per l'interfaccia utente  |
| `script.js`  | Logica principale dell'applicazione |

---

## 🧩 Componenti Principali

### 1. Interfaccia Utente

#### Header
- Titolo con icona
- Barra di ricerca:
  - Campo input
  - Pulsante reset
  - Pulsante ricerca
  - Filtro "visto/non visto"

#### Corpo Principale
- Container per le card film
- Raggruppamento per lettera iniziale del titolo
- Layout responsive (6 card desktop, 2 card mobile)

#### Elementi Interattivi
- **Card Film**:
  - Poster con hover
  - Overlay dettagli (desktop)
  - Modale completo (mobile)
  - Toggle "visto/non visto"

- **Pulsante Film Casuale**:
  - Posizione fissa (in basso a destra)
  - Tooltip esplicativo
  - Seleziona un film *non visto*

---

### 2. Funzionalità Principali

#### 🎬 Gestione Film
- **Caricamento** da TMDb con concorrenza controllata
- **Supporto per film senza ID TMDb**

#### 🔎 Ricerca e Filtri
- Ricerca full-text su titolo, generi, cast, regia
- Filtro per stato (tutti / visti / da vedere)
- Debounce per performance

#### 📱 Visualizzazione
- Virtual scrolling
- Layout responsive
- Raggruppamento alfabetico

#### ✅ Gestione Stato
- Persistenza tramite `localStorage`
- Toggle interattivo "visto/non visto"
- Feedback visivo istantaneo

---

### 3. Dettagli Tecnici

#### 🔗 Integrazione API

| Funzione         | Endpoint TMDb               |
|----------------- |---------------------------- |
| Ricerca Film     | `/search/movie`             |
| Dettagli Film    | `/movie/{movie_id}`         |
| Crediti          | `/movie/{movie_id}/credits` |
| Lista Generi     | `/genre/movie/list`         |

- Fallback per immagini mancanti
- Ritentativi per chiamate fallite

#### ⚡ Performance

- Lazy loading immagini
- Virtual scrolling
- Debounce ricerca
- DocumentFragment per rendering
- Concorrenza limitata (max 5 richieste)
- Animazioni smooth & hover

---

## 🔧 Struttura del Codice

### Variabili Globali
```javascript
const apiKey = "4e4dcff717724b5b605bbb9f0438a391";
const baseUrl = "https://api.themoviedb.org/3";
const SEEN_KEY = "movieSeenStatus";
let genreMap = {};
let localMovies = [];
let movieMetadata = {};
let seenMap = loadSeenMap();
```

### Funzioni Principali

| Categoria    | Funzioni                                                            |
|--------------|---------------------------------------------------------------------|
| API          | `fetchFullMovieData()`, `fetchGenres()`, `processWithConcurrency()` |
| Rendering UI | `createMovieCard()`, `displayMovies()`, `groupMoviesByLetter()`     |
| Stato        | `loadSeenMap()`, `saveSeenMap()`, `toggleSeen()`                    |
| Filtri       | `filterMovies()`                                                    |
| Casuale      | `getRandomUnseenMovie()`, `openRandomMovieModal()`                  |

### Gestione Eventi

Ricerca con debounce

- Click su card (modale su mobile)

- Toggle stato

- Filtro stato

- Film casuale

## 🔄 Flusso di Lavoro

### 🚀 Caricamento Iniziale

1. Recupero generi da TMDb

2. Caricamento film con concorrenza controllata

3. Stato "visto" da localStorage

4. Rendering interfaccia

## 👤 Interazione Utente

- Ricerca in tempo reale

- Filtro stato

- Click su card → dettagli

- Toggle stato "visto"

- Pulsante film casuale

## 🚀 Performance & Ottimizzazione

- Batch richieste con ritardo

- Lazy loading immagini

- Rendering efficiente con DocumentFragment

- Virtual scrolling

- Debounce input

## 🧱 Estensibilità

### Aggiunta Film

- Modifica l'array movies nello script

- Supporto per film senza ID TMDb

### Personalizzazione

- Modifica colori in style.css

- Aggiunta filtri personalizzati

- Cambiamento messaggi UI