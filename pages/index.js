import React, { useEffect, useState } from "react";
import { API, useInfiniteScroll } from "resources";
import Loading from "components/Loading";
import renderPosts from "components/renderPosts";

export default function index() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    // Simulating fetching data smarter than getting one huge payload
    setTimeout(() => {
      posts.length !== allPosts.length &&
        setPosts(allPosts.slice(0, posts.length + 10));
      setIsFetching(false);
    }, Math.random() * 1000);
  }

  useEffect(() => {
    API.get("/posts").then((res) => {
      if (res.data) {
        setAllPosts(res.data);
        setPosts(res.data.slice(0, 30));
      } else throw Error("No data returned");
    });
  }, []);

  return (
    <>
      {posts.map(renderPosts)}
      {posts.length !== allPosts.length && isFetching && <Loading />}
    </>
  );
}
