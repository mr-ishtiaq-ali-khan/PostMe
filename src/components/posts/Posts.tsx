import { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";
import { PostType } from "../../types/posts.type";
import { useDispatch } from "react-redux";
import { postsActions } from "../../redux/posts/slice";
import { urls } from "../../constants/url";
import "../../assets/styles/posts.scss";
import usePosts from "../../hooks/usePosts";
import AddNewPost from "./AddNewPost";
import PostAddIcon from '@mui/icons-material/PostAdd';
import useToast from "../../hooks/useToast";

function Posts() {
    const {
        posts,
        isBottomIntersecting,
        deletePost,
        destroyObserver,
        bottomRef
    } = usePosts();

    const [openNewPost, setOpenNewPost] = useState(false);

    const dispatch = useDispatch();
    const { showToast } = useToast();

    function fetchPosts() {
        axios
        .get(urls.posts.getPosts, {
          headers: {
            "Content-Type": "application/json"
          },
        }).then(response => {
            if(response.data) {
                dispatch(postsActions.addPost(JSON.parse(response.data)));
                showToast('success', 'Fetched Posts sucessfully!');
            }
          }).catch(error => {
            showToast('error', 'Unable to Fetch Post');
            console.log('Error fetching Posts:', error)
          });
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const toggleNewPostModal = () => {
        setOpenNewPost(!openNewPost)
    }

    function handleSubmit(title: string, description: string): void {
        axios.post(urls.posts.addPost, [{
            title,
            description
        }])
        .then((response) => {
            console.log(response);
            showToast('success', 'Saved Post sucessfully!');
            toggleNewPostModal();
            fetchPosts();
            
        }).catch(err => {
            console.log(err)
            showToast('error', 'Error Saving Post!');
        })
    }

    const addNewPostProps = {
        openModal: openNewPost,
        setOpenModal: setOpenNewPost,
        closeModalCb: toggleNewPostModal,
        handleSubmit: handleSubmit,
    }

    const postsJsx = posts.map((post: PostType) => (
        <Card key={post.uuid} title={post.title} body={post.description} onClose={() => deletePost(post.uuid)} />
    ));

    return (
        <div className="postCard">
            {postsJsx}
            
            <button className="newPostBtn" onClick={toggleNewPostModal}><PostAddIcon /> Post</button>
            <AddNewPost {...addNewPostProps} />

            {/* Placeholder at the bottom for infinite scroll */}
            {!destroyObserver && <div ref={bottomRef} style={{ marginTop: '20px', textAlign: 'center', padding: '10px', borderTop: '1px solid #ccc' }}>
                {isBottomIntersecting && <span>Loading more posts...</span>}
            </div>}
        </div>
    );
}

export default Posts;