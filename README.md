# Grupp 21 – Idéabstract-hemsida

## Om projektet

Detta projekt är byggt med **HTML**, **CSS** och **JavaScript** och presenterar
gruppens idéabstract kring AI och översvämningar.

Sidan är uppbyggd kring fem centrala delar av idéabstractet — **ämnesområde**,
**utmaning**, **idé**, **hypotes** och **referenser** där varje del har en
egen undersida (`subject-area.html`, `challenge.html`, `idea.html`,
`hypothesis.html`, `references.html`), medan startsidan (`index.html`)
sammanfattar helheten och länkar semantiskt vidare till respektive del.

Ämnet handlar om hur artificiell intelligens, i kombination med realtidsdata
om exempelvis vattennivå, nederbörd och markfuktighet, skulle kunna göra det
möjligt att upptäcka och förutsäga översvämningsrisker tidigare och mer
träffsäkert än med enskilda datakällor var för sig. Källor citeras löpande i
texten via fotnoter och samlas i Nature-format på referens sidan.

## Webbkomponenter

För att undvika att duplicera kod för gemensamma delar återanvänds fyra
egenbyggda webkomponenter genomgående på alla sidor. Dessa finns under
`/components`-mappen:

- **`<site-nav>`** – responsiv navigering med burger-meny för mindre skärmar
- **`<site-banner>`** – sidbanner med dynamisk titel per sida
- **`<site-footer>`** – gemensam sidfot med sidkarta och källhänvisning
- **`<footnote-ref>`** – fotnotsreferenser i löptexten som länkar direkt till
  rätt post på referens-sidan

## Bidrag

- **Student A** – Skapat landningssidan, samt webbkomponenter under `/components`.
- **Student B** – Skapat idé-sidan samt undersökt och valt huvudämnet för hemsidan.
- **Student C** – Skapat hypotes-sidan samt varit drivande i designvalen.
- **Student D** – Skapat utmaning-sidan samt jobbat med den övergripande CSS-stylingen.
- **Student E** – Skapat ämnesområde-sidan samt referens-sidan.

## Design

Hemsidan är designad **mobile first** och är responsiv genom
CSS media queries, vilket ger en anpassad upplevelse på både mobil, surfplatta
och desktop.

## Köra sidan lokalt

Det rekommenderas att köra sidan via en lokal server för bästa resultat.
Installera Python 3 och kör sedan följande kommando i projektmappen:

```bash
python3 -m http.server 8000
```

Öppna därefter `http://localhost:8000` i webbläsaren.