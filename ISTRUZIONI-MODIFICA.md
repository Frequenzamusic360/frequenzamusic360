# FrequenzaMusic360 — come modificare il sito

## Modifica senza passare da Manus

1. Crea un account gratuito su [GitHub](https://github.com/).
2. Crea un nuovo repository, ad esempio `frequenzamusic360`.
3. Carica tutti i file e le cartelle contenuti in questo pacchetto.
4. Vai su [Vercel](https://vercel.com/new), scegli **Import Git Repository** e seleziona il repository.
5. Usa queste impostazioni:
   - Framework: **Vite**
   - Build command: `pnpm build`
   - Output directory: `dist/public`
6. Premi **Deploy**.

Da quel momento ogni modifica pubblicata su GitHub può aggiornare il sito su Vercel.

## Dove cambiare i contenuti

- `client/src/pages/Home.tsx`: testi, artisti, storie, link social e sezioni.
- `client/src/index.css`: colori, font, dimensioni e stile grafico.
- `client/public/assets/`: logo e immagini.
- `client/index.html`: titolo e descrizione Google del sito.

## Modificare dal browser senza installare programmi

Su GitHub apri un file, premi l'icona della matita, modifica il contenuto e premi **Commit changes**. Vercel ricostruirà il sito automaticamente se il repository è collegato.

## Modificare con Visual Studio Code

Scarica il progetto, aprilo in Visual Studio Code e modifica i file. Per una prova locale:

```bash
pnpm install
pnpm dev
```

Per pubblicare gli aggiornamenti basta fare commit e push su GitHub.

## Nota importante

Il modulo contatti presente nella versione attuale mostra una conferma grafica, ma non salva ancora i messaggi in un database o in una casella email. Per ricevere davvero le proposte serve collegare un servizio form o un indirizzo email.
