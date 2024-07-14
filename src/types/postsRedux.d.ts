import { PostType } from "./posts.type";

export type PostsStateType = {
    posts: PostType[];
    loading: boolean;
    error: string | null;
}