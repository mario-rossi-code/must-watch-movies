const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware per servire file statici dalla cartella 'public'
app.use(express.static("public"));

// Endpoint per la API Key
app.get("/get-api-key", (req, res) => {
    try {
        // Leggi il file di configurazione
        const configPath =
            process.env.NODE_ENV === "production"
                ? "/etc/secrets/config.json" // Su Render in produzione
                : path.join(__dirname, "config.json"); // In locale per testing

        const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
        res.json({ apiKey: config.apiKey });
    } catch (error) {
        console.error("Errore nel caricamento della configurazione:", error);
        res.status(500).json({ error: "Impossibile caricare la chiave API" });
    }
});

// Endpoint per verificare che il server funzioni
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Tutte le altre richieste vanno al frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in ascolto su porta ${port}`);
});
