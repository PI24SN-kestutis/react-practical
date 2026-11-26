// Šis komponentas rodo užuominą, klaidą arba sėkmės pranešimą.

function Message({ text, type }) {
    // Kol pranešimo nėra, nieko nerodome.
    if (!text) {
        return null;
    }

    // Klaidas skaitytuvai paskelbia iškart (alert), o užuominas – ramiau (status).
    const role = type === 'error' ? 'alert' : 'status';

    return (
        <p className={`guess-message guess-message-${type}`} role={role}>
            {text}
        </p>
    );
}

export default Message;
