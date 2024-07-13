export type ModalType = {
    title: string;
    body: string | number | React.ReactNode;
    closeModal: () => void;
    modal: boolean;
    setModal: Dispatch<SetStateAction<boolean>>;
}