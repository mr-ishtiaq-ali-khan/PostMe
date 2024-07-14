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


function usePosts() {
    const [destroyObserver, setDestroyObserver] = useState<boolean>(false);
    const [incrementalPostList, setIncrementalPostList] = useState<PostType[]>([]);

    const dispatch = useDispatch();
    const posts = useSelector((state: RootState) => selectPosts(state));


    useEffect(() => {
        setIncrementalPostList(posts);
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
        }).catch(error => {
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
    };
}

export default usePosts;