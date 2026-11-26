// Šis komponentas rodo vieną prekę ir mygtuką - pridėti į krepšelį.
function ProductItem({ product, onAdd }) {
    // Kaina rodoma su dviem skaitmenimis po kablelio, pvz. 24,50
    const formattedPrice = product.price.toFixed(2).replace('.', ',');

    return (
        <li className="product-item">
            <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{formattedPrice} Eur</span>
            </div>

            <button
                type="button"
                className="add-button"
                onClick={() => onAdd(product)}
            >
                Pridėti į krepšelį
            </button>
        </li>
    );
}

export default ProductItem;
