import "../../assets/styles/card.scss";
import { CardType } from "../../types/card.type";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Card({title, body, onClose = () => {}}: CardType) {

    return (
        <div className="card">
            <div className="cardTitle">
                <span>{title}</span>
                <button onClick={onClose}>
                    <DeleteForeverIcon />
                </button>
            </div>
            <div className="cardBody">
                {body}
            </div>
        </div>
    );
}

export default Card;