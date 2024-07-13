import "../../assets/styles/modal.scss";
import { ModalType } from "../../types/modal.type";

function ModalPopup({title, body, closeModal}: ModalType) {
    return (
        <div className="modalPopup">
            <div className="modalHeader">
                <div className="modalHeaderText">{title}</div>
                <div onClick={closeModal} className="closeModal">x</div>
            </div>
            <div className="modalBody">{ body }</div>
        </div>
    );
}

export default ModalPopup;