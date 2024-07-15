import "../../assets/styles/modal.scss";
import { ModalType } from "../../types/modal.type";
import CloseIcon from '@mui/icons-material/Close';

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