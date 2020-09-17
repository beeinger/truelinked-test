import Post from "components/Post";
import User from "components/User";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API } from "resources";

export default function id() {
  const router = useRouter();
  const [post, setPost] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (!router.query.id) return;
    API.get("/posts/" + router.query.id).then((res) => {
      if (res.data) {
        setPost(res.data);
      } else throw Error("No data returned");
    });
  }, [router]);

  useEffect(() => {
    if (!post) return;
    API.get("/users/" + post.userId).then((res) => {
      if (res.data) {
        setUser(res.data);
      } else throw Error("No data returned");
    });
  }, [post]);

  return (
    <>
      <Post data={post} />
      <User data={user} />
    </>
  );
}
