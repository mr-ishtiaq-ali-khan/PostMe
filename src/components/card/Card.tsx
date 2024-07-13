import "../../assets/styles/card.scss";
import { CardType } from "../../types/card.type";

function Card({title, body, onClose = () => {}}: CardType) {

    return (
        <div className="card">
            <div className="cardTitle">
                <span>{title}</span>
                <button onClick={onClose}>x</button>
            </div>
            <div className="cardBody">
                {body}
            </div>
        </div>
    );
}

export default Card;