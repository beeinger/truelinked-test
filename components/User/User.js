import renderPosts from "components/renderPosts";
import React, { useEffect, useState } from "react";
import { API } from "resources";

export default function User({ data }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!data) return;
    API.get("/users/" + data.id + "/posts").then((res) => {
      if (res.data) {
        setPosts(res.data);
      } else throw Error("No data returned");
    });
  }, [data]);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      {posts.map(renderPosts)}
    </>
  );
}
