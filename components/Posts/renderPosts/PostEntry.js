import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export default function PostEntry({ val }) {
  const router = useRouter();

  const redirectToPost = (e) => {
    router.push("/post/" + val.id);
  };

  return (
    <_PostEntry onClick={redirectToPost}>
      <td>{val.id}</td>
      <td>{val.title}</td>
      <td>{val.userId}</td>
    </_PostEntry>
  );
}

const _PostEntry = styled.tr`
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: border-bottom 0.3s ease-out, color 0.3s ease-out;

  > td {
    padding: 8px;
  }

  > :nth-child(odd) {
    font-family: "Quicksand", sans-serif;
    text-align: center;
    color: #d4af37;
  }

  > :nth-child(2) {
    text-align: left;
    padding-left: 16px;
  }

  :hover {
    border-bottom: 1px solid black;
  }

  :hover > :nth-child(odd) {
    color: black;
  }
`;
