import PostEntry from "./PostEntry";

const renderPosts = (val, idx) => <PostEntry {...{ val, key: idx }} />;

export default renderPosts;
