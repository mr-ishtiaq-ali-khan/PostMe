import Posts from "../components/posts/Posts";

/**
 * The `Home` function in a TypeScript React component renders a container with a `Posts` component
 * inside.
 * @returns A div element with the class name "container" containing the Posts component.
 */
function Home() {

    return (
        <div className="container">
            <Posts />
        </div>
    );
}

export default Home;