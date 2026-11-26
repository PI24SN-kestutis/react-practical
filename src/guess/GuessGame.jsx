// Šis komponentas saugo slaptą skaičių, įvestį, bandymų skaičių ir žaidimo rezultatą.

import { useState } from 'react';
import GuessForm from './GuessForm';
import Message from './Message';
import './guess.css';

function GuessGame() {
    // Slaptas skaičius sugeneruojamas vieną kartą per pradinės reikšmės funkciją.
    const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState({ text: '', type: '' });
    const [isWon, setIsWon] = useState(false);

    function handleChange(value) {
        setGuess(value);
    }

    function handleSubmit() {
        const trimmedGuess = guess.trim();

        if (trimmedGuess === '') {
            setMessage({ text: 'Įveskite skaičių.', type: 'error' });
            return;
        }

        // Priimami tik sveikieji skaičiai (be kablelio, taško ar raidžių).
        if (!/^-?\d+$/.test(trimmedGuess)) {
            setMessage({ text: 'Įveskite sveikąjį skaičių.', type: 'error' });
            return;
        }

        const number = Number(trimmedGuess);

        if (number < 1 || number > 100) {
            setMessage({ text: 'Skaičius turi būti nuo 1 iki 100.', type: 'error' });
            return;
        }

        // Nuo čia spėjimas tinkamas, todėl jis skaičiuojamas kaip bandymas.
        setAttempts(prevAttempts => prevAttempts + 1);

        if (number > secretNumber) {
            setMessage({ text: 'Bandyk mažesnį', type: 'hint' });
        } else if (number < secretNumber) {
            setMessage({ text: 'Bandyk didesnį', type: 'hint' });
        } else {
            setMessage({ text: 'Teisingai!', type: 'success' });
            setIsWon(true);
        }
    }

    return (
        <main className="guess-page">
            <h1>C dalis – Skaičių spėjimo žaidimas</h1>
            <p>Atspėkite slaptą sveikąjį skaičių nuo 1 iki 100.</p>

            <section className="guess-panel">
                <GuessForm
                    value={guess}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    disabled={isWon}
                />

                <Message text={message.text} type={message.type} />

                <p className="guess-attempts">
                    Bandymų skaičius: <strong>{attempts}</strong>
                </p>
            </section>
        </main>
    );
}

export default GuessGame;
