import React from "react";
import styled from "styled-components";

export default function Post({ data, author }) {
  return (
    <_Post>
      <div>{data.body}</div>
      <div>~ {author}</div>
      <div />
      <div />
      <div />
    </_Post>
  );
}

const _Post = styled.div`
  > :nth-child(2) {
    color: #b08f26;
    text-align: right;
    margin: 16px 16px 80px 16px;
    cursor: default;
  }

  > :nth-child(n + 3) {
    content: "";
    margin-bottom: 20px;
    height: 1px;
    background-color: black;
  }

  > :nth-child(4) {
    width: 70%;
    margin-left: 15%;
  }

  > :nth-child(5) {
    width: 30%;
    margin-left: 35%;
  }
`;
