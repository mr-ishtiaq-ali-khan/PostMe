import { useEffect } from "react";
import Card from "../card/Card";
import axios from "axios";
import { PostType } from "../../types/posts.type";
import { useDispatch } from "react-redux";
import { postsActions } from "../../redux/posts/slice";
import { urls } from "../../constants/url";
import "../../assets/styles/posts.scss";
import usePosts from "../../hooks/usePosts";

function Posts() {
    const {
        posts,
        isBottomIntersecting,
        deletePost,
        destroyObserver,
        bottomRef
    } = usePosts();

    const dispatch = useDispatch();

    function fetchPosts() {
        axios
        .get(urls.posts.getPosts, {
          headers: {
            "Content-Type": "application/json"
          },
        }).then(response => {
            if(response.data) {
                dispatch(postsActions.addPost(JSON.parse(response.data)));
            }
          }).catch(error => {
            console.log('Error fetching Posts:', error)
          });
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const postsJsx = posts.map((post: PostType) => (
                        <Card key={post.uuid} title={post.title} body={post.description} onClose={() => deletePost(post.uuid)} />
                    ));

    return (
        <div className="postCard">
            {postsJsx}
            
            {/* Placeholder at the bottom for infinite scroll */}
            {!destroyObserver && <div ref={bottomRef} style={{ marginTop: '20px', textAlign: 'center', padding: '10px', borderTop: '1px solid #ccc' }}>
                {isBottomIntersecting && <span>Loading more posts...</span>}
            </div>}
        </div>
    );
}

export default Posts;