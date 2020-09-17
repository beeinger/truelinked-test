import React from "react";

export default function Post({ data }) {
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
