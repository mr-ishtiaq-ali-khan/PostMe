import { CardType } from "./card.type";

export type PostType = {
    title: string;
    description: string;
    uuid: string;
}

export type PostOnSubmit = (title: string, description: string) => void

export type NewPostFormProps = {
  onSubmit: PostOnSubmit;
};

export type AddNewPostModal = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  closeModalCb: () => void;
  handleSubmit: PostOnSubmit
}