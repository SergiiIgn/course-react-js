import { useState, useEffect } from "react"

const Tooltip = ({ render, content }) => {
    const [isTooltipShown, setIsTooltipShown] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0});
    
    const toggleTooltip = () => {
        setIsTooltipShown(!isTooltipShown);
    };
  
    const handleMouseMove = (event) => {
        setTooltipPosition({x: event.clientX +10, y: event.clientY + 10});
    };
  
    const scrollHandler = (() => {
        isTooltipShown && toggleTooltip(false);
    }, [isTooltipShown, toggleTooltip]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
    })

    
    return (
        <div>
            {render(toggleTooltip, handleMouseMove)}
            {isTooltipShown && (
                <div 
                    className="tooltip"
                    style={{
                        left: tooltipPosition.x,
                        top: tooltipPosition.y,
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
  };

export default Tooltip