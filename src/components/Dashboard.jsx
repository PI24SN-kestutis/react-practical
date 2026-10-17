import TaskCard from './TaskCard';

function Dashboard({ onOpenTask }) {

    const listA = (
        <ul>
            <li>Pradėti nuo tuščio sąrašo. Užduotis turi id, text ir completed.</li>
            <li>Pridėti įvestą užduotį mygtuku arba paspaudus Enter, pašalinti teksto kraštų tarpus ir išvalyti lauką po pridėjimo.</li>
            <li>Nepridėti tuščio ar vien tarpų turinčio teksto ir parodyti klaidos pranešimą.</li>
            <li>Pažymėti tik pasirinktą užduotį, ją vizualiai išskirti ir parodyti „Atlikta“. Atliktos užduoties pažymėjimo mygtukas išjungiamas.</li>
            <li>Ištrinti tik pasirinktą užduotį. Kai sąrašas tuščias, rodyti „Užduočių dar nėra.“</li>
        </ul>
    );
    
    const listB = (
        <ol>
            <li>Rodyti bent tris prekes su unikaliu id, pavadinimu name ir teigiama kaina price. Pradinis krepšelis tuščias.</li>
            <li>Duomenis ir pridėjimo funkciją perduoti per props grandine App → ProductList → ProductItem.</li>
            <li>Pirmą kartą pridėtai prekei nustatyti kiekį quantity: 1. Pakartotinai pridėjus tą pačią prekę, didinti kiekį, nekuriant antros eilutės.</li>
            <li>Krepšelyje rodyti pavadinimą, vieneto kainą, kiekį, eilutės sumą ir bendrą kainą. Sumas skaičiuoti iš krepšelio duomenų ir rodyti su dviem skaitmenimis po kablelio.</li>
            <li>Pašalinti visą pasirinktos prekės eilutę ir perskaičiuoti kainą. Tuščiame krepšelyje rodyti „Krepšelis tuščias.“ ir 0,00 Eur.</li>
        </ol>
    );
    const listC = (
        <dl>
            <dt>Slaptą skaičių sugeneruoti per useState pradinės reikšmės funkciją. Skaičius neturi kisti tarp bandymų ir negali būti rodomas naudotojui.</dt>
            <dd> - useState pradinės reikšmės funkcija naudojama slaptam skaičiui sugeneruoti.</dd>
            <dt>Leisti spėti mygtuku arba paspaudus Enter. Pradinis bandymų skaičius – 0.</dt>
            <dd> - Bandymų skaičius didinamas kiekvieną kartą, kai vartotojas spėja.</dd>
            <dt>Atmesti tuščią, neskaitinę, trupmeninę ir į intervalą 1–100 nepatenkančią įvestį; parodyti klaidą ir nedidinti bandymų skaičiaus.</dt>
            <dd> - Rodyti klaidą ir nedidinti bandymų skaičiaus, jei įvestis netinkama.</dd>
            <dt>Kiekvieną tinkamą spėjimą, įskaitant teisingą, skaičiuoti kaip vieną bandymą. Rodomas bandymų skaičius turi atsinaujinti.</dt>
            <dd> - Rodomas bandymų skaičius turi atsinaujauti po kiekvieno spėjimo.</dd>
            <dt>Jei spėjimas per didelis, rodyti „Bandyk mažesnį“, jei per mažas – „Bandyk didesnį“, o atspėjus – „Teisingai!“.</dt>
            <dd> - Rodyti atitinkamą pranešimą pagal spėjimo rezultatą.</dd>
            <dt>Atspėjus išjungti įvestį ir mygtuką „Spėti“. Naują žaidimą galima pradėti perkraunant puslapį.</dt>
            <dd> - Įvestis ir mygtukas „Spėti“ išjungiami, kai spėjimas teisingas.</dd>
        </dl>
    );

    const tasks = [
    { id: 'a', title: 'A dalis', description: listA },
    { id: 'b', title: 'B dalis', description: listB },
    { id: 'c', title: 'C dalis', description: listC }
];

    return (
        <div className="app-layout">
            <header className="site-header">
                <div className="header-content">
                    <div className="brand">
                        <span className="brand-logo">VIKO</span>
                        <div>
                            <strong>React praktinis darbas</strong>
                            <small>Vilniaus kolegija</small>
                        </div>
                    </div>
                    <span className="header-label">Pradžia</span>
                </div>
            </header>

            <main className="dashboard">
                <nav className="breadcrumb" aria-label="Puslapio vieta">
                    Pagrindinis / Praktinis darbas
                </nav>

                <h1>Užduočių skydelis</h1>
                <p className="dashboard-description">
                    Pasirinkite praktinio darbo dalį.
                </p>

                <div className="task-grid">
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} onOpen={() => onOpenTask(task.id)} />
                    ))}
                </div>
            </main>

            <footer className="site-footer">
                <span>React • Vite • JavaScript</span>
                <span>Akademinis projektas</span>
            </footer>
        </div>
    );
}

export default Dashboard;