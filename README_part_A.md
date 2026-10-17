# A dalis – Užduočių sąrašas

## Projekto aprašymas

Tai React praktinio darbo A dalis, skirta užduočių sąrašo valdymui.

Programa leidžia pridėti naujas užduotis, pažymėti jas kaip atliktas ir pašalinti iš sąrašo.

## Naudojamos technologijos

- React (funkciniai komponentai)
- JavaScript ir JSX
- Vite
- CSS
- React `useState`

Papildomos vykdymo bibliotekos nenaudojamos.

## Komponentai

| Komponentas | Paskirtis |
|---|---|
| `App` | Valdo pagrindinę navigaciją |
| `Dashboard` | Rodo praktinio darbo dalis |
| `TaskList` | Saugo užduočių masyvą ir valdo veiksmus |
| `TaskForm` | Priima naujos užduoties tekstą |
| `TaskItem` | Rodo užduotį ir jos valdymo mygtukus |

## Funkcionalumas

1. Programa paleidžiama su tuščiu užduočių sąrašu.
2. Naują užduotį galima pridėti mygtuku arba paspaudus `Enter`.
3. Prieš pridedant pašalinami tarpai teksto pradžioje ir pabaigoje.
4. Tuščios užduotys nepriimamos – rodomas klaidos pranešimas.
5. Užduotį galima pažymėti kaip atliktą.
6. Atlikta užduotis vizualiai išskiriama, o pakartotinis pažymėjimas išjungiamas.
7. Užduotį galima ištrinti.
8. Kai sąrašas tuščias, rodomas pranešimas „Užduočių dar nėra.“

## React principų taikymas

- `useState` – užduočių masyvui ir formos būsenai valdyti.
- `props` – duomenims ir funkcijoms perduoti tarp komponentų.
- `map()` – užduočių sąrašui atvaizduoti ir pasirinktai užduočiai atnaujinti.
- `filter()` – užduotims šalinti.
- `onSubmit` – formos pateikimui.
- `onClick` – užduočių valdymo veiksmams.
- Sąlyginis JSX – klaidų, būsenų ir tuščio sąrašo pranešimams rodyti.

## Projekto paleidimas

Reikalingi Node.js ir npm.

```bash
npm install
npm run dev
```

Atidarykite terminale pateiktą vietinį adresą, paprastai `http://localhost:5173/`.

## Apribojimai

Užduotys saugomos tik React komponento būsenoje. Atnaujinus naršyklės puslapį, sąrašas išvalomas.

Nenaudojami `useEffect`, `localStorage`, React Router ar papildomos vykdymo bibliotekos.

## Autorius

Kęstutis Skrebė

VIKO studento React praktinis darbas.