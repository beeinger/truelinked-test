import Head from "next/head";
import React from "react";
import styled, { css } from "styled-components";
import { RiHomeLine } from "react-icons/ri";
import { useRouter } from "next/router";

export default function Layout({ children, title, post }) {
  const router = useRouter();

  const handleGoHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      {router.pathname !== "/" && (
        <Home onClick={handleGoHome}>
          <RiHomeLine size={24} />
        </Home>
      )}
      <_Layout post={post}>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title}</h1>
        {children}
      </_Layout>
    </>
  );
}

const _Layout = styled.div`
  margin: 32px 15vw 16px 15vw;

  @media screen and (max-width: 992px) {
    margin: 32px 10vw 16px 10vw;
  }

  @media screen and (max-width: 600px) {
    margin: 32px 5vw 16px 5vw;
  }

  font-size: 1.25rem;
  font-family: "Playfair Display", serif;

  > h1 {
    margin-left: 12px;
  }

  ${({ post }) => post && PostLayout}
`;

const PostLayout = css`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  > h1 {
    width: 100%;
  }
  > div {
    width: calc(50% - 36px);
    margin: 12px;

    @media screen and (max-width: 900px) {
      width: calc(100% - 36px);
    }
  }

  > :nth-child(2) {
    margin-right: 24px;
  }
`;

const Home = styled.div`
  font-family: "Quicksand", sans-serif;
  position: fixed;
  top: 8px;
  left: 8px;
  cursor: pointer;
`;
