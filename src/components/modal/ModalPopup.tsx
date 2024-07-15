import "../../assets/styles/modal.scss";
import { ModalType } from "../../types/modal.type";
import CloseIcon from '@mui/icons-material/Close';

/**
 * The function `ModalPopup` is a React component that displays a modal popup with a title, body, and
 * close button functionality.
 * @param {ModalType}  - The `ModalPopup` function takes in three parameters:
 * @returns A JSX element representing a modal popup with a title, body, and close button.
 */
function ModalPopup({title, body, closeModal}: ModalType) {
    return (
        <div className="modalPopup">
            <div className="modalHeader">
                <div className="modalHeaderText">{title}</div>
                <div onClick={closeModal} className="closeModal"><CloseIcon /></div>
            </div>
            <div className="modalBody">{ body }</div>
        </div>
    );
}

export default ModalPopup;