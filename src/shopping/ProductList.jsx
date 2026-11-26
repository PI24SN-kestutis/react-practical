// Šis komponentas rodo prekių sąrašą ir perduoda duomenis bei onAdd į ProductItem.
import ProductItem from './ProductItem';

function ProductList({ products, onAdd }) {
    return (
        <section className="shopping-panel">
            <h2>Prekės</h2>

            <ul className="product-list">
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                    />
                ))}
            </ul>
        </section>
    );
}

export default ProductList;
