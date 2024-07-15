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
import CardPlaceHolder from "../card/CardPlaceHolder";
import NoDataAvailable from "../NoDataAvailable";
import useIsMobileDevice from "../../hooks/useIsMobileDevice";

function Posts() {
    const {
        posts,
        isBottomIntersecting,
        deletePost,
        destroyObserver,
        bottomRef,
        loadedAllPosts,
        noData
    } = usePosts();

    const [openNewPost, setOpenNewPost] = useState(false);

    const dispatch = useDispatch();
    const { showToast } = useToast();
    const isMobile = useIsMobileDevice();
    /**
     * The function fetches posts using axios, adds them to the state using dispatch, and displays a
     * success message or an error message accordingly.
     */
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

    /**
     * The function `handleSubmit` sends a POST request to add a new post with a title and description,
     * handling success and error responses accordingly.
     * @param {string} title - The `title` parameter is a string that represents the title of the post
     * that will be submitted. It is used as the title of the post that will be added to the list of
     * posts.
     * @param {string} description - The `description` parameter in the `handleSubmit` function is a
     * string that represents the description of a post that will be added. It is used along with the
     * `title` parameter to create a new post object that will be sent to the server via an HTTP POST
     * request.
     */
    function handleSubmit(title: string, description: string): void {
        axios.post(urls.posts.addPost, [{
            title,
            description
        }])
        .then(() => {
            showToast('success', 'Saved Post sucessfully!');
            toggleNewPostModal();
            fetchPosts();
            
        }).catch(err => {
            console.log(err)
            showToast('error', 'Error Saving Post!');
        })
    }

   /* The `addNewPostProps` constant is creating an object that holds properties related to adding a
   new post functionality in the component. Here's a breakdown of each property in the object: */
    const addNewPostProps = {
        openModal: openNewPost,
        setOpenModal: setOpenNewPost,
        closeModalCb: toggleNewPostModal,
        handleSubmit: handleSubmit,
    }

   /* The `const postsJsx` variable is mapping over the `posts` array and creating a new array of JSX
   elements. For each `post` object in the `posts` array, it creates a `<Card>` component with the
   following props:
   - `key`: The unique identifier `uuid` of the post to ensure each element has a unique key.
   - `title`: The title of the post from the `post` object.
   - `body`: The description or body of the post from the `post` object.
   - `onClose`: A function that will be called when the close button of the card is clicked, which
   in this case is calling the `deletePost` function with the `uuid` of the post as an argument. */
    const postsJsx = !noData ? posts.map((post: PostType) => (
        <Card key={post.uuid} title={post.title} body={post.description} onClose={() => deletePost(post.uuid)} />
    )) : null;

    return (
        <>
            { noData && <NoDataAvailable />}
                
            <div className="postCard">
                
                {postsJsx}
                
                { !loadedAllPosts && <CardPlaceHolder count={isMobile ? 2 : 4} /> }

                <button className="newPostBtn" onClick={toggleNewPostModal}><PostAddIcon /> Post</button>
                
                {/* Placeholder at the bottom for infinite scroll */}
                {!destroyObserver && <div ref={bottomRef} className="postsIntersectionObserver">
                    {isBottomIntersecting && <span>loading</span>}
                </div>}
            </div> 
            

            <AddNewPost {...addNewPostProps} />
        </>
    );
}

export default Posts;