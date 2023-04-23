import ProductCard from "./ProductCard";
import { withFetchingData } from "../../HOCs/withFetchingData"

const ProductCardList = ({data: products, isLoading, error}) => {
    console.log(products);
    return (
        <div>
            <h3>PRODUCTS</h3>
            <div className="container_product">
            
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {products && products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    )
}

export default withFetchingData(ProductCardList)