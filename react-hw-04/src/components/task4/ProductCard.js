import Tooltip from "./Tooltip";
import "../../styles/task_4.css"

const ProductCard = ({product}) => {
    const { name, price, rating, image, description } = product;

    return (
        <div className="card">
            <Tooltip 
                content={
                    <div>
                        <h5>{name}</h5>
                        <p>Price: {price}</p>
                        <p>Rating: {rating}</p>
                    </div>
                }
                render={(toggleTooltip, handleMouseMove) => (
                    <div>
                        <img 
                            src={image} 
                            alt={name}
                            className="img" 
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => toggleTooltip(true)} 
                            onMouseLeave={() => toggleTooltip(false)} 
                        />
                    </div>
                )}
            />
            <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
            </div>
        </div>
    );
}

export default ProductCard