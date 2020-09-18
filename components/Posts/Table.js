import React from "react";
import styled, { css } from "styled-components";
import Loading from "./Loading";
import renderPosts from "./renderPosts";

export default function Table({ data, fetching, small, title }) {
  return (
    <>
      <_Table small={small}>
        <thead>
          <th>Id</th>
          <th>{title || "Title"}</th>
          <th>User Id</th>
        </thead>
        <tbody>{data.map(renderPosts)}</tbody>
      </_Table>
      {fetching && <Loading />}
    </>
  );
}

const _Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  > tbody {
    position: relative;
    width: 100%;
  }

  > thead {
    color: #b08f26;
    border-bottom: 16px solid transparent;
  }

  > thead > :nth-child(odd) {
    width: 64px;
  }

  ${({ small }) => small && SmallTable}
`;

const SmallTable = css`
  > thead > :nth-child(odd),
  > tbody > tr > :nth-child(odd) {
    display: none;
  }
  > thead {
    border-bottom: 4px solid transparent;
  }
  font-size: 0.9em;
`;
