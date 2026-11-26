# C dalis – Skaičių spėjimo žaidimas

## Projekto aprašymas

Tai React praktinio darbo C dalis – žaidimas, kuriame naudotojas bando atspėti atsitiktinį sveikąjį skaičių nuo 1 iki 100.

Programa tikrina įvestį, skaičiuoja bandymus, pateikia užuominas ir po laimėjimo išjungia spėjimo galimybę.

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
| `GuessGame` | Saugo slaptą skaičių, įvestį, bandymų skaičių ir žaidimo rezultatą |
| `GuessForm` | Rodo įvesties lauką ir mygtuką „Spėti“ |
| `Message` | Rodo užuominą, klaidą arba sėkmės pranešimą |

Būsena laikoma `GuessGame`, o `GuessForm` ir `Message` gauna duomenis bei funkcijas per `props`.

## Duomenų srautas

```text
GuessGame (secretNumber, guess, attempts, message, isWon)
├── GuessForm (value, onChange, onSubmit, disabled)
└── Message (text, type)
```

## Funkcionalumas

1. Slaptas skaičius sugeneruojamas per `useState` pradinės reikšmės funkciją. Jis nekinta tarp bandymų ir naudotojui nerodomas.
2. Spėti galima mygtuku „Spėti“ arba paspaudus `Enter`. Pradinis bandymų skaičius – 0.
3. Atmetama tuščia, neskaitinė, trupmeninė ir į intervalą 1–100 nepatenkanti įvestis. Rodoma klaida, bandymų skaičius nedidėja.
4. Kiekvienas tinkamas spėjimas, įskaitant teisingą, skaičiuojamas kaip vienas bandymas, o rodomas skaičius atsinaujina.
5. Per didelis spėjimas rodo „Bandyk mažesnį“, per mažas – „Bandyk didesnį“, o teisingas – „Teisingai!“.
6. Atspėjus išjungiamas įvesties laukas ir mygtukas „Spėti“. Naują žaidimą galima pradėti perkraunant puslapį.

## Įvesties tikrinimas

Tikrinimas vykdomas šia tvarka:

| Įvestis | Pranešimas |
|---|---|
| Tuščia arba vien tarpai | „Įveskite skaičių.“ |
| Raidės, kablelis, taškas (pvz., `abc`, `3.5`) | „Įveskite sveikąjį skaičių.“ |
| Sveikasis skaičius už intervalo 1–100 | „Skaičius turi būti nuo 1 iki 100.“ |

Sveikieji skaičiai atpažįstami reguliariąja išraiška `/^-?\d+$/`. Įvesties laukas yra `type="text"`, o ne `type="number"`, kad netinkamą įvestį tikrintų pati programa ir parodytų klaidos pranešimą.

## React principų taikymas

- `useState` – slaptam skaičiui, įvesčiai, bandymų skaičiui, pranešimui ir žaidimo būsenai saugoti.
- `useState` pradinės reikšmės funkcija – slaptam skaičiui sugeneruoti vieną kartą.
- `props` – duomenims ir įvykių funkcijoms perduoti.
- Kontroliuojamas įvesties laukas (`value` ir `onChange`).
- `onSubmit` – spėjimui mygtuku ir `Enter`.
- Sąlyginis JSX – `Message` nieko nerodo, kol pranešimo nėra.
- `disabled` – laukui ir mygtukui išjungti po laimėjimo.

## Projekto paleidimas

Reikalingi Node.js ir npm.

```bash
npm install
npm run dev
```

Atidarykite terminale pateiktą vietinį adresą, paprastai `http://localhost:5173/`, o pradžios puslapyje pasirinkite C dalį.

## Apribojimai

Žaidimo būsena saugoma tik React komponente. Atnaujinus puslapį, generuojamas naujas slaptas skaičius ir bandymų skaičius nunulinamas.

Mygtuko naujam žaidimui nėra. Nenaudojami `useEffect`, `localStorage`, React Router ar papildomos vykdymo bibliotekos.

## Autorius

Kęstutis Skrebė

VIKO studento React praktinis darbas.
