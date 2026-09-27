# Grupp 21 Idéabstract hemsida

## Om projektet

Detta projekt är byggt med **HTML**, **CSS** och **JavaScript** och presenterar
gruppens idéabstract kring ett valt forskningsämne.

## Webkomponenter

För att undvika att duplicera kod för gemensamma delar (banner, navbar och
fotnot) används återanvändbara webkomponenter. Dessa har skapats av
**Student 1 (student A)** och finns under `/components`mappen.

## Bidrag

- **Student A** – Skapat landningssidan, samt webkomponenterna under `/components`.
- **Student B** – Skapat idé sidan samt undersökt och valt huvudämnet för hemsidan.
- **Student C** – Skapat hypotes sidan samt varit drivande i designvalen.
- **Student D** – Skapat utmaning sidan samt jobbat med den övergripande CSS stylingen.
- **Student E** – Skapat ämnesområde sidan samt referens sidan.

## Design

Hemsidan är designad **mobile first** och är responsiv (reactive) genom
CSS media queries, vilket ger en anpassad upplevelse på både mobil, surfplatta
och desktop.

## Köra sidan lokalt

Det rekommenderas att köra sidan via en lokal server för bästa resultat.
Installera Python 3 och kör sedan följande kommando i projektmappen:

```bash
python3 -m http.server 8000
```

Öppna därefter `http://localhost:8000` i webbläsaren.