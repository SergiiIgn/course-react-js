import ProductCardList from "./ProductCardList";

const PRODUCTS_BASE_URL = "https://my.api.mockaroo.com/coffee.json?key=778301b0";

const Task_4 = () => {
    return (
        <div>
            <h2>Task 4</h2>
            <ProductCardList url={PRODUCTS_BASE_URL} />
        </div>
    )
}

export default Task_4