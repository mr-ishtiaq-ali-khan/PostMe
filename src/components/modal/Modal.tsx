import { createPortal } from "react-dom";
import ModalPopup from "./ModalPopup";
import { ModalType } from "../../types/modal.type";

function Modal(props: ModalType) {

    if(!props.modal) return null;

    return createPortal(
        <div className="modal">
            <ModalPopup {...props} />
        </div>,
        document.getElementById("custom_popup") as Element
    );
}

export default Modal;
