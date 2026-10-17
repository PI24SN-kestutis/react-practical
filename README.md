# React praktinis darbas

Vilniaus kolegijos (VIKO) praktinis darbas, skirtas React bibliotekos pagrindams įsisavinti.

Projektą sudaro trys savarankiškos dalys (A, B ir C), sujungtos į vieną React programą su bendru pradžios puslapiu (*Dashboard*).

## Technologijos

- **React** – vartotojo sąsajos komponentai
- **JavaScript (JSX)** – programos logika ir komponentų struktūra
- **Vite** – projekto kūrimo ir paleidimo aplinka
- **CSS** – vartotojo sąsajos stilius, pritaikytas VIKO vizualiniam identitetui
- **ESLint** – kodo kokybės tikrinimas

Naudojami funkciniai komponentai, `props` ir `useState`. Papildomos vykdymo bibliotekos bei `useEffect` nenaudojami.

## Praktinio darbo dalys

| Dalis | Pavadinimas | Būsena | Dokumentacija |
|---|---|---|---|
| A | Užduočių sąrašas | Įgyvendinta | [README_part_A.md](README_part_A.md) |
| B | Krepšelio sistema | Planuojama | Bus pridėta |
| C | Trečioji užduotis | Planuojama | Bus pridėta |

### A dalis – Užduočių sąrašas

Užduočių valdymo programa, leidžianti:

- Pridėti užduotį mygtuku arba paspaudus `Enter`.
- Patikrinti įvestį ir neleisti pridėti tuščios užduoties.
- Pažymėti užduotį kaip atliktą.
- Vizualiai atskirti atliktas užduotis.
- Ištrinti pasirinktą užduotį.
- Matyti tuščio sąrašo pranešimą.

**Komponentai:** `TaskList`, `TaskForm`, `TaskItem`.

Išsamus aprašymas: [A dalies dokumentacija](README_part_A.md).

## Projekto struktūra

```text
react-practical/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   └── TaskCard.jsx
│   ├── tasks/
│   │   ├── TaskList.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── tasks.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── README.md
├── README_part_A.md
├── package.json
└── vite.config.js
```

Projekto struktūra bus plečiama įgyvendinant B ir C dalis.

## Diegimas ir paleidimas

**Reikalavimai:** Node.js ir npm, suderinami su naudojama Vite versija.

### 1. Atsisiųskite projektą

```bash
git clone https://github.com/PI24SN-kestutis/react-practical.git
cd react-practical
```

### 2. Įdiekite priklausomybes

```bash
npm install
```

### 3. Paleiskite kūrimo serverį

```bash
npm run dev
```

Atidarykite terminale nurodytą adresą, paprastai:

`http://localhost:5173/`

## Kodo kokybės tikrinimas

ESLint patikra:

```bash
npm run lint
```

Produkcinės versijos surinkimas:

```bash
npm run build
```

## Architektūra

Projektas paremtas komponentine React architektūra.

- Vienas komponentas – vienas failas.
- Būsena valdoma naudojant `useState`.
- Duomenys ir įvykių apdorojimo funkcijos perduodami per `props`.
- Naudojami JSX, sąlyginis atvaizdavimas ir sąrašų generavimas.
- Komponentų ir kintamųjų pavadinimai rašomi anglų kalba.
- Vartotojo sąsajos tekstai pateikiami lietuvių kalba.

## Vartotojo sąsaja

Programa naudoja VIKO vizualinio identiteto spalvas ir prisitaikantį (*responsive*) CSS dizainą.

Pradiniame Dashboard puslapyje pateikiamos trijų praktinio darbo dalių kortelės.

## Duomenų saugojimas

Šiuo metu duomenys saugomi React komponentų būsenoje. Atnaujinus puslapį, jie atkuriami į pradinę būseną.

Duomenų bazė ir