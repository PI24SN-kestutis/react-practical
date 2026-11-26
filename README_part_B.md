# B dalis – Krepšelio sistema

## Projekto aprašymas

Tai React praktinio darbo B dalis, skirta prekių sąrašui ir krepšeliui valdyti.

Programa leidžia pridėti prekes į krepšelį, matyti jų kiekį, eilučių sumas ir bendrą kainą bei pašalinti prekes iš krepšelio.

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
| `ShoppingApp` | Saugo prekių sąrašą ir krepšelį, valdo pridėjimą bei pašalinimą |
| `ProductList` | Rodo prekes ir perduoda duomenis bei `onAdd` į `ProductItem` |
| `ProductItem` | Rodo vieną prekę ir mygtuką „Pridėti į krepšelį“ |
| `Cart` | Rodo krepšelio turinį, sumas ir mygtukus „Pašalinti iš krepšelio“ |

Būsena laikoma `ShoppingApp`, nes tai artimiausias bendras `ProductList` ir `Cart` tėvinis komponentas.

## Duomenų srautas

```text
ShoppingApp (products, cart, handleAdd, handleRemove)
├── ProductList (products, onAdd)
│   └── ProductItem (product, onAdd)
└── Cart (cart, onRemove)
```

Pridėjimo funkcija perduodama per `props` grandine `ShoppingApp` → `ProductList` → `ProductItem`.

## Duomenų struktūra

Prekė:

```js
{ id: 1, name: 'Nešiojamasis kompiuteris', price: 799.99 }
```

Krepšelio eilutė (prekė su kiekiu):

```js
{ id: 1, name: 'Nešiojamasis kompiuteris', price: 799.99, quantity: 2 }
```

## Funkcionalumas

1. Rodomos trys prekės su unikaliu `id`, pavadinimu `name` ir teigiama kaina `price`.
2. Programa paleidžiama su tuščiu krepšeliu.
3. Pirmą kartą pridėtai prekei nustatomas kiekis `quantity: 1`.
4. Pakartotinai pridėjus tą pačią prekę, didinamas kiekis, o nauja eilutė nekuriama.
5. Krepšelyje rodomas pavadinimas, vieneto kaina, kiekis, eilutės suma ir bendra kaina.
6. Sumos skaičiuojamos iš krepšelio duomenų ir rodomos su dviem skaitmenimis po kablelio.
7. „Pašalinti iš krepšelio“ pašalina visą pasirinktos prekės eilutę, o bendra kaina perskaičiuojama.
8. Kai krepšelis tuščias, rodomas pranešimas „Krepšelis tuščias.“ ir bendra kaina `0,00 Eur`.

## React principų taikymas

- `useState` – prekių sąrašui ir krepšeliui saugoti.
- `props` – duomenims ir funkcijoms perduoti tarp komponentų.
- `map()` – prekėms ir krepšelio eilutėms atvaizduoti, taip pat kiekiui atnaujinti.
- `find()` – patikrinti, ar prekė jau yra krepšelyje.
- `filter()` – eilutei pašalinti iš krepšelio.
- `reduce()` – bendrai krepšelio kainai apskaičiuoti.
- `onClick` – pridėjimo ir šalinimo veiksmams.
- Sąlyginis JSX – tuščio krepšelio pranešimui rodyti.

Bendra kaina ir eilučių sumos neišsaugomos būsenoje – jos skaičiuojamos kiekvieną kartą iš krepšelio duomenų, todėl visada atitinka esamą krepšelio turinį.

## Projekto paleidimas

Reikalingi Node.js ir npm.

```bash
npm install
npm run dev
```

Atidarykite terminale pateiktą vietinį adresą, paprastai `http://localhost:5173/`, o pradžios puslapyje pasirinkite B dalį.

## Apribojimai

Krepšelis saugomas tik React komponento būsenoje. Atnaujinus naršyklės puslapį, krepšelis ištuštinamas.

Prekių kiekio mažinti negalima – šalinama visa eilutė. Nenaudojami `useEffect`, `localStorage`, React Router ar papildomos vykdymo bibliotekos.

## Autorius

Kęstutis Skrebė

VIKO studento React praktinis darbas.
