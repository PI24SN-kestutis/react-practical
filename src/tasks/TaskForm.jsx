// Čia naudojame useState įvesties tekstui ir klaidos pranešimui.
//onSubmit leidžia pridėti užduotį tiek mygtuku, tiek Enter.

import { useState } from 'react';

function TaskForm({ onAdd }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedText = text.trim();

        if (!trimmedText) {
            setError('Įveskite užduoties tekstą.');
            return;
        }

        onAdd(trimmedText);
        setText('');
        setError('');
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <label htmlFor="task-text">
                Nauja užduotis
            </label>

            <input
                id="task-text"
                type="text"
                value={text}
                placeholder="Įrašykite užduotį..."
                onChange={event => {
                    setText(event.target.value);
                    setError('');
                }}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'task-error' : undefined}
            />

            {error && (
                <p id="task-error" className="task-error" role="alert">
                    {error}
                </p>
            )}

            <button type="submit">
                Pridėti užduotį
            </button>
        </form>
    );
}

export default TaskForm;