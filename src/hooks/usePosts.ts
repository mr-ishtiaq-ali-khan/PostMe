import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/rootReducer";
import { postsActions, selectPosts } from "../redux/posts/slice";
import { PostType } from "../types/posts.type";
import { featureConstants } from "../constants/featureConstants";
import { urls } from "../constants/url";
import useInfiniteScroll from "./useInfiniteScroll";
import useToast from "./useToast";

/**
 * The `usePosts` function in TypeScript manages posts, loads more posts on scroll, and handles post
 * deletion with a toast notification.
 * @returns The `usePosts` function returns an object with the following properties:
 * - `posts`: An array of `PostType` representing the incremental list of posts.
 * - `isBottomIntersecting`: A boolean value indicating whether the bottom boundary is intersecting.
 * - `deletePost`: A function that takes a `uuid` string parameter and dispatches an action to delete
 * the post with that `uuid
 */
function usePosts() {
    const [destroyObserver, setDestroyObserver] = useState<boolean>(false);
    const [incrementalPostList, setIncrementalPostList] = useState<PostType[]>([]);

    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => selectPosts(state));

    const { showToast } = useToast();

    useEffect(() => {
        if(posts.length > 0) {
            const _posts = [...posts];
            const currentPostsLength = incrementalPostList.length;
    
            const limitedPosts = _posts.slice(0, currentPostsLength);
            setIncrementalPostList(limitedPosts);
        }

    }, [posts]);

    const bottomBoundaryRef = useRef<HTMLDivElement>(null);

    const loadMorePosts = () => {
        if(posts.length === incrementalPostList.length) return setDestroyObserver(true);

        const _posts = [...posts];
        const limit = featureConstants.post.viewItemsLimit;

        const limitedPosts = _posts.slice(incrementalPostList.length, incrementalPostList.length + limit);
        setIncrementalPostList([...incrementalPostList, ...limitedPosts]);
    };

    const handleDeletePost = (uuid: string) => {
        dispatch(postsActions.deletePost(uuid));

        axios.post(urls.posts.deletePost, {
            uuid,
          })
        .then((response) => {
            console.log(response);
            showToast('success', 'Deleted Post sucessfully!');
        }).catch(error => {
            showToast('error', 'Error Deleting Post');
            console.log("Error Deleting Posts", error)
        })
    }

    const isBottomIntersecting = useInfiniteScroll({
        root: null,
        target: bottomBoundaryRef.current,
        onIntersect: loadMorePosts,
        threshold: 1.0,
    });

    return {
        posts: incrementalPostList,
        isBottomIntersecting,
        deletePost: handleDeletePost,
        destroyObserver,
        bottomRef: bottomBoundaryRef,
        loadedAllPosts: posts.length === incrementalPostList.length,
        noData: posts.length === 0,
    };
}

export default usePosts;