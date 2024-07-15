import Modal from "../modal/Modal";
import { featureConstants } from "../../constants/featureConstants";
import { AddNewPostModal } from "../../types/posts.type";
import PostForm from "./NewPostForm";

/**
 * The function `AddNewPost` renders a modal component with a post form for adding a new post.
 * @param {AddNewPostModal}  - 1. `openModal`: A boolean state variable that determines whether the
 * modal is open or closed.
 * @returns The `AddNewPost` function is returning a `Modal` component with props passed in from the
 * `modalProps` object. The `Modal` component will display a title, body (which is a `PostForm`
 * component with an `onSubmit` function), and have the ability to open and close the modal based on
 * the `openModal`, `setOpenModal`, and `closeModal
 */
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