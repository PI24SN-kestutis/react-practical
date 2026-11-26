// Šis komponentas rodo spėjimo lauką ir mygtuką „Spėti“.
// onSubmit leidžia spėti tiek mygtuku, tiek paspaudus Enter.

function GuessForm({ value, onChange, onSubmit, disabled }) {
    function handleSubmit(event) {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit} className="guess-form">
            <label htmlFor="guess-input">
                Jūsų spėjimas
            </label>

            <div className="guess-controls">
                <input
                    id="guess-input"
                    type="text"
                    inputMode="numeric"
                    value={value}
                    placeholder="Įveskite skaičių 1–100"
                    onChange={event => onChange(event.target.value)}
                    disabled={disabled}
                />

                <button type="submit" disabled={disabled}>
                    Spėti
                </button>
            </div>
        </form>
    );
}

export default GuessForm;
