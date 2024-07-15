import "../../assets/styles/card.scss";
import { CardType } from "../../types/card.type";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

/**
 * The Card component in TypeScript React renders a card with a title, body, and a close button.
 * @param {CardType}  - The `Card` function takes in an object with the following properties:
 * @returns A React functional component named `Card` is being returned. It renders a card with a
 * title, body, and a close button. The `Card` component takes props `title`, `body`, and `onClose`,
 * where `onClose` is a function that defaults to an empty arrow function. The card displays the title,
 * body, and a delete button that triggers the `onClose`
 */
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