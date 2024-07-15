import { createPortal } from "react-dom";
import ModalPopup from "./ModalPopup";
import { ModalType } from "../../types/modal.type";

/**
 * The Modal function renders a modal component using React and TypeScript.
 * @param {ModalType} props - The `Modal` function takes a single parameter `props` of type
 * `ModalType`. The `ModalType` likely contains properties related to the modal such as `modal` which
 * is a boolean indicating whether the modal should be displayed, and other properties that are spread
 * onto the `ModalPopup` component
 * @returns The Modal component is returning a modal element wrapped in a portal using the createPortal
 * function from React. The modal element has a className of "modal" and contains the ModalPopup
 * component with the props passed down to it. This modal element is then rendered inside the DOM
 * element with the id "custom_popup".
 */
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
