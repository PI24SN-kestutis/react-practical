import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './shopping.css';

function ShoppingApp() {
    const [products] = useState([
        { id: 1, name: 'Nešiojamasis kompiuteris', price: 799.99 },
        { id: 2, name: 'Belaidė pelė', price: 24.50 },
        { id: 3, name: 'Klaviatūra', price: 59.90 }
    ]);

    const [cart, setCart] = useState([]);

    function handleAdd(product) {
        setCart(prevCart => {
            const existingProduct = prevCart.find(
                item => item.id === product.id
            );

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    }

    function handleRemove(id) {
        setCart(prevCart =>
            prevCart.filter(item => item.id !== id)
        );
    }

    return (
        <main className="shopping-page">
            <h1>B dalis – Krepšelio sistema</h1>
            <p>Pasirinkite prekes ir pridėkite jas į krepšelį.</p>

            <ProductList
                products={products}
                onAdd={handleAdd}
            />

            <Cart
                cart={cart}
                onRemove={handleRemove}
            />
        </main>
    );
}

export default ShoppingApp;