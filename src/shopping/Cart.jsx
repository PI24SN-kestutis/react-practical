// Šis komponentas rodo krepšelio turinį, sumas ir mygtukus prekėms pašalinti.

// Suma rodoma su dviem skaitmenimis po kablelio, pvz. 24,50
function formatPrice(value) {
    return value.toFixed(2).replace('.', ',');
}

function Cart({ cart, onRemove }) {
    // Bendra kaina skaičiuojama iš krepšelio duomenų
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <section className="shopping-panel">
            <h2>Krepšelis</h2>

            {cart.length === 0 ? (
                <p className="cart-empty">Krepšelis tuščias.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map(item => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-info">
                                <span className="cart-name">{item.name}</span>
                                <span>Vieneto kaina: {formatPrice(item.price)} Eur</span>
                                <span>Kiekis: {item.quantity}</span>
                                <span>
                                    Eilutės suma: {formatPrice(item.price * item.quantity)} Eur
                                </span>
                            </div>

                            <button
                                type="button"
                                className="remove-button"
                                onClick={() => onRemove(item.id)}
                            >
                                Pašalinti iš krepšelio
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <p className="cart-total">
                Bendra kaina: <strong>{formatPrice(total)} Eur</strong>
            </p>
        </section>
    );
}

export default Cart;
