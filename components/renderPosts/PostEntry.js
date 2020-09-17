import { useRouter } from "next/router";
import React from "react";

export default function PostEntry({ val }) {
  const router = useRouter();

  const redirectToPost = (e) => {
    router.push("/post/" + e.target.id);
  };

  return (
    <h3 id={val.id} onClick={redirectToPost}>
      {val.title}
    </h3>
  );
}
