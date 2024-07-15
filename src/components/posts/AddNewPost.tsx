import Modal from "../modal/Modal";
import { featureConstants } from "../../constants/featureConstants";
import { AddNewPostModal } from "../../types/posts.type";
import PostForm from "./NewPostForm";

function AddNewPost({openModal, setOpenModal, closeModalCb, handleSubmit}: AddNewPostModal) {
    const { title } = featureConstants.post.addNewPost;
    
    const modalProps = {
        title,
        body: <PostForm onSubmit={handleSubmit} />,
        closeModal: closeModalCb,
        modal: openModal,
        setModal: setOpenModal,
    }

    return (
        <div>
            <Modal {...modalProps} />
        </div>
    );
}

export default AddNewPost;